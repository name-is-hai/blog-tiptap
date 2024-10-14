import { MenuProps } from '@/components/editor/menus/types';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { getRenderContainer } from '@/lib/utils';
import { deleteSelection } from '@tiptap/pm/commands';
import { BubbleMenu as BaseBubbleMenu } from '@tiptap/react';
import {
  AlignHorizontalDistributeEnd,
  AlignHorizontalDistributeStart,
  AlignHorizontalSpaceAround,
  Trash2,
} from 'lucide-react';
import { useCallback, useId } from 'react';
import { sticky } from 'tippy.js';
import ImageBlock from '../extensions/image-block';
import { ImageBlockWidth } from './components/ImageBlockWidth';

export const ImageBubbleMenu = ({ editor, appendTo }: MenuProps) => {
  const getReferenceClientRect = useCallback(() => {
    const renderContainer = getRenderContainer(editor, 'node-imageBlock');
    const rect =
      renderContainer?.getBoundingClientRect() ||
      new DOMRect(-1000, -1000, 0, 0);

    return rect;
  }, [editor]);

  const shouldShow = useCallback(() => {
    const isActive = editor.isActive(ImageBlock.name);

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
  const onRemoveImage = useCallback(() => {
    const { state, dispatch } = editor.view;
    deleteSelection(state, dispatch);
  }, [editor]);

  return (
    <BaseBubbleMenu
      editor={editor}
      pluginKey={`imageBlockMenu-${useId()}`}
      updateDelay={0}
      tippyOptions={{
        appendTo: () => {
          return appendTo?.current;
        },
        offset: [0, 8],
        popperOptions: {
          modifiers: [{ name: 'flip', enabled: false }],
        },
        getReferenceClientRect,
        plugins: [sticky],
        sticky: 'popper',
      }}
      shouldShow={shouldShow}
    >
      <div
        hidden={shouldShow()}
        className="min-w-max flex flex-row h-full items-center leading-none gap-0.5 p-2 bg-background rounded-lg shadow-sm border border-border"
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size={'icon'}
                onClick={onAlignImageLeft}
                variant={
                  editor.isActive('imageBlock', { align: 'left' })
                    ? 'secondary'
                    : 'ghost'
                }
              >
                <AlignHorizontalDistributeStart className="size-4" />
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
                    ? 'secondary'
                    : 'ghost'
                }
              >
                <AlignHorizontalSpaceAround className="size-4" />
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
                    ? 'secondary'
                    : 'ghost'
                }
              >
                <AlignHorizontalDistributeEnd className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Align image left </TooltipContent>
          </Tooltip>
          <ImageBlockWidth
            onChange={onWidthChange}
            value={parseInt(editor.getAttributes('imageBlock').width ?? 100)}
          />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size={'icon'}
                onClick={onRemoveImage}
                variant={'ghost'}
                disabled={!editor.isEditable}
              >
                <Trash2 className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Delete image</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </BaseBubbleMenu>
  );
};

// export default ImageBlockMenu
