import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { EmojiItem } from '@tiptap-pro/extension-emoji';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { EmojiListProps } from '../types';

const EmojiList = forwardRef((props: EmojiListProps, ref) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => setSelectedIndex(0), [props.items]);

  /**
   * Selects an emoji item from the list and calls the provided command with the selected item's name.
   *
   * @param index - The index of the emoji item to select.
   */
  const selectItem = useCallback(
    (index: number) => {
      const item = props.items[index];

      if (item) {
        props.command({ name: item.name });
      }
    },
    [props]
  );

  useImperativeHandle(ref, () => {
    const scrollIntoView = (index: number) => {
      const item = props.items[index];

      if (item) {
        const node = document.querySelector(`[data-emoji-name="${item.name}"]`);

        if (node) {
          node.scrollIntoView({ block: 'nearest' });
        }
      }
    };

    const upHandler = () => {
      const newIndex =
        (selectedIndex + props.items.length - 1) % props.items.length;
      setSelectedIndex(newIndex);
      scrollIntoView(newIndex);
    };

    const downHandler = () => {
      const newIndex = (selectedIndex + 1) % props.items.length;
      setSelectedIndex(newIndex);
      scrollIntoView(newIndex);
    };

    const enterHandler = () => {
      selectItem(selectedIndex);
    };

    return {
      onKeyDown: ({ event }: { event: React.KeyboardEvent }) => {
        if (event.key === 'ArrowUp') {
          upHandler();
          return true;
        }

        if (event.key === 'ArrowDown') {
          downHandler();
          return true;
        }

        if (event.key === 'Enter') {
          enterHandler();
          return true;
        }

        return false;
      },
    };
  }, [props, selectedIndex, selectItem]);

  const createClickHandler = useCallback(
    (index: number) => () => selectItem(index),
    [selectItem]
  );

  if (!props.items || !props.items.length) {
    return null;
  }

  return (
    <ScrollArea className="max-w-[18rem] h-[18rem] bg-white dark:bg-zinc-900 rounded-lg p-2">
      {props.items.map((item: EmojiItem, index: number) => (
        <Button
          variant={index === selectedIndex ? 'default' : 'ghost'}
          className="justify-start w-full"
          size={'sm'}
          key={item.name}
          onClick={createClickHandler(index)}
          data-emoji-name={item.name}
        >
          {item.fallbackImage ? (
            <img
              src={item.fallbackImage}
              className="w-5 h-5"
              alt="emoji"
            />
          ) : (
            item.emoji
          )}{' '}
          <span className="truncate text-ellipsis">:{item.name}:</span>
        </Button>
      ))}
    </ScrollArea>
  );
});

EmojiList.displayName = 'EmojiList';

export default EmojiList;
