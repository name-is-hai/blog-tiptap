import { getRenderContainer } from '@/lib/utils';
import { BubbleMenu as BaseBubbleMenu, useEditorState } from '@tiptap/react';
import { useCallback, useId } from 'react';
import { sticky } from 'tippy.js';
import { ColumnLayout } from '../extensions/MultiColumn/Columns';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from '@/components/ui/tooltip';
import { TooltipTrigger } from '@radix-ui/react-tooltip';
import { Button } from '@/components/ui/button';
import { Columns2, PanelLeft } from 'lucide-react';
import { MenuProps } from './types';


export const ColumnsMenu = ({ editor, appendTo }: MenuProps) => {
  const getReferenceClientRect = useCallback(() => {
    const renderContainer = getRenderContainer(editor, 'columns');
    const rect =
      renderContainer?.getBoundingClientRect() ||
      new DOMRect(-1000, -1000, 0, 0);

    return rect;
  }, [editor]);

  const shouldShow = useCallback(() => {
    const isColumns = editor.isActive('columns');
    return isColumns;
  }, [editor]);

  const onColumnLeft = useCallback(() => {
    editor.chain().focus().setLayout(ColumnLayout.SidebarLeft).run();
  }, [editor]);

  const onColumnRight = useCallback(() => {
    editor.chain().focus().setLayout(ColumnLayout.SidebarRight).run();
  }, [editor]);

  const onColumnTwo = useCallback(() => {
    editor.chain().focus().setLayout(ColumnLayout.TwoColumn).run();
  }, [editor]);
  const { isColumnLeft, isColumnRight, isColumnTwo } = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        isColumnLeft: ctx.editor.isActive('columns', {
          layout: ColumnLayout.SidebarLeft,
        }),
        isColumnRight: ctx.editor.isActive('columns', {
          layout: ColumnLayout.SidebarRight,
        }),
        isColumnTwo: ctx.editor.isActive('columns', {
          layout: ColumnLayout.TwoColumn,
        }),
      };
    },
  });

  return (
    <BaseBubbleMenu
      editor={editor}
      pluginKey={`columnsMenu-${useId()}`}
      shouldShow={shouldShow}
      updateDelay={0}
      tippyOptions={{
        offset: [0, 8],
        popperOptions: {
          modifiers: [{ name: 'flip', enabled: false }],
        },
        getReferenceClientRect,
        appendTo: () => appendTo?.current,
        plugins: [sticky],
        sticky: 'popper',
      }}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size={'icon'}
              onClick={onColumnLeft}
              variant={isColumnLeft ? 'default' : 'ghost'}
            >
              <PanelLeft className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Sidebar left</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size={'icon'}
              onClick={onColumnTwo}
              variant={isColumnTwo ? 'default' : 'ghost'}
            >
              <Columns2 className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Two columns</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size={'icon'}
              onClick={onColumnRight}
              variant={isColumnRight ? 'default' : 'ghost'}
            >
              <PanelLeft className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>PanelRight</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </BaseBubbleMenu>
  );
};

export default ColumnsMenu;
