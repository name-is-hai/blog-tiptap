import React, { useCallback, useEffect, useRef, useState } from 'react';

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CommandTool, MenuListProps } from '../extensions/SlashCommand/types';

export const SlashMenu = React.forwardRef((props: MenuListProps, ref) => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const activeItem = useRef<HTMLButtonElement>(null);
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);
  const [selectedCommandIndex, setSelectedCommandIndex] = useState(0);

  // Anytime the groups change, i.e. the user types to narrow it down, we want to
  // reset the current selection to the first menu item
  useEffect(() => {
    setSelectedGroupIndex(0);
    setSelectedCommandIndex(0);
  }, [props.items]);

  const selectItem = useCallback(
    (groupIndex: number, commandIndex: number) => {
      const command = props.items[groupIndex].commands[commandIndex];
      props.command(command);
    },
    [props]
  );
  React.useImperativeHandle(ref, () => ({
    onKeyDown: ({ event }: { event: React.KeyboardEvent }) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        if (!props.items.length) {
          return false;
        }

        const totalGroups = props.items.length;
        let newCommandIndex = selectedCommandIndex;
        let newGroupIndex = selectedGroupIndex;

        if (event.key === 'ArrowDown') {
          newCommandIndex = selectedCommandIndex + 1;
          if (
            newCommandIndex >= props.items[selectedGroupIndex].commands.length
          ) {
            newCommandIndex = 0;
            newGroupIndex = (selectedGroupIndex + 1) % totalGroups;
          }
        } else if (event.key === 'ArrowUp') {
          newCommandIndex = selectedCommandIndex - 1;
          if (newCommandIndex < 0) {
            newGroupIndex =
              (selectedGroupIndex - 1 + totalGroups) % totalGroups;
            newCommandIndex = props.items[newGroupIndex].commands.length - 1;
          }
        }

        setSelectedCommandIndex(newCommandIndex);
        setSelectedGroupIndex(newGroupIndex);
        return true;
      }

      if (event.key === 'Enter') {
        if (
          props.items.length &&
          selectedGroupIndex >= 0 &&
          selectedCommandIndex >= 0
        ) {
          selectItem(selectedGroupIndex, selectedCommandIndex);

          return true;
        }
        return false;
      }

      return false;
    },
  }));

  useEffect(() => {
    if (activeItem.current && scrollContainer.current) {
      const offsetTop = activeItem.current.offsetTop;
      const offsetHeight = activeItem.current.offsetHeight;

      scrollContainer.current.scrollTop = offsetTop - offsetHeight;
    }
  }, [selectedCommandIndex, selectedGroupIndex]);

  const createCommandClickHandler = useCallback(
    (groupIndex: number, commandIndex: number) => {
      return () => {
        selectItem(groupIndex, commandIndex);
      };
    },
    [selectItem]
  );

  if (!props.items.length) {
    return null;
  }

  return (
    <Command
      ref={scrollContainer}
      loop
    >
      <CommandList>
        <ScrollArea className="h-[300px]">
          {props.items.map((group, groupIndex) => {
            return (
              <CommandGroup
                key={`${group.name}-wrapper`}
                heading={group.title}
              >
                {group.commands.map(
                  (command: CommandTool, commandIndex: number) => {
                    return (
                      <CommandItem
                        key={commandIndex}
                        onSelect={createCommandClickHandler(
                          groupIndex,
                          commandIndex
                        )}
                      >
                        {command.icon && (
                          <command.icon className="mr-2 h-4 w-4" />
                        )}
                        <span>{command.label}</span>
                      </CommandItem>
                    );
                  }
                )}
              </CommandGroup>
            );
          })}
        </ScrollArea>
      </CommandList>
    </Command>
  );
});

SlashMenu.displayName = 'SlashMenu';

export default SlashMenu;
