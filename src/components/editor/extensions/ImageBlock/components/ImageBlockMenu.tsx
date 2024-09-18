import { MenuProps } from '@/components/editor/menus/types';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { getRenderContainer } from '@/lib/utils';
import { BubbleMenu as BaseBubbleMenu } from '@tiptap/react';
import {
  AlignHorizontalDistributeEnd,
  AlignHorizontalDistributeStart,
  AlignHorizontalSpaceAround,
} from 'lucide-react';
import { useCallback, useId, useRef } from 'react';
import { Instance, sticky } from 'tippy.js';
import { ImageBlockWidth } from './ImageBlockWidth';

export const ImageBlockMenu = ({ editor, appendTo }: MenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const tippyInstance = useRef<Instance | null>(null);

  const getReferenceClientRect = useCallback(() => {
    const renderContainer = getRenderContainer(editor, 'node-imageBlock');
    const rect =
      renderContainer?.getBoundingClientRect() ||
      new DOMRect(-1000, -1000, 0, 0);

    return rect;
  }, [editor]);

  const shouldShow = useCallback(() => {
    const isActive = editor.isActive('imageBlock');

    return isActive;
  }, [editor]);

  const onAlignImageLeft = useCallback(() => {
    editor
      .chain()
      .focus(undefined, { scrollIntoView: false })
      .setImageBlockAlign('left')
      .run();
  }, [editor]);

  const onAlignImageCenter = useCallback(() => {
    editor
      .chain()
      .focus(undefined, { scrollIntoView: false })
      .setImageBlockAlign('center')
      .run();
  }, [editor]);

  const onAlignImageRight = useCallback(() => {
    editor
      .chain()
      .focus(undefined, { scrollIntoView: false })
      .setImageBlockAlign('right')
      .run();
  }, [editor]);

  const onWidthChange = useCallback(
    (value: number) => {
      editor
        .chain()
        .focus(undefined, { scrollIntoView: false })
        .setImageBlockWidth(value)
        .run();
    },
    [editor]
  );

  return (
    <BaseBubbleMenu
      editor={editor}
      pluginKey={`imageBlockMenu-${useId()}`}
      shouldShow={shouldShow}
      updateDelay={0}
      tippyOptions={{
        offset: [0, 8],
        popperOptions: {
          modifiers: [{ name: 'flip', enabled: false }],
        },
        getReferenceClientRect,
        onCreate: (instance: Instance) => {
          tippyInstance.current = instance;
        },
        appendTo: () => {
          return appendTo?.current;
        },
        plugins: [sticky],
        sticky: 'popper',
      }}
    >
      <TooltipProvider>
        <div ref={menuRef}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size={'icon'}
                onClick={onAlignImageLeft}
                variant={
                  editor.isActive('imageBlock', { align: 'left' })
                    ? 'default'
                    : 'ghost'
                }
              >
                <AlignHorizontalDistributeStart />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Align image left </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size={'icon'}
                onClick={onAlignImageCenter}
                variant={
                  editor.isActive('imageBlock', { align: 'center' })
                    ? 'default'
                    : 'ghost'
                }
              >
                <AlignHorizontalSpaceAround />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Align image left </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size={'icon'}
                onClick={onAlignImageRight}
                variant={
                  editor.isActive('imageBlock', { align: 'right' })
                    ? 'default'
                    : 'ghost'
                }
              >
                <AlignHorizontalDistributeEnd />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Align image left </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
      <ImageBlockWidth
        onChange={onWidthChange}
        value={parseInt(editor.getAttributes('imageBlock').width ?? 100)}
      />
    </BaseBubbleMenu>
  );
};

// export default ImageBlockMenu
