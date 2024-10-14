import { MenuProps, ShouldShowProps } from '@/components/editor/menus/types';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn, getRenderContainer } from '@/lib/utils';
import { BubbleMenu as BaseBubbleMenu, isActive } from '@tiptap/react';
import { ColumnDeleteIcon, RowDeleteIcon } from 'hugeicons-react';
import {
  BetweenHorizonalStart,
  BetweenHorizontalEnd,
  BetweenVerticalEnd,
  BetweenVerticalStart,
  TableCellsMerge,
  TableCellsSplit,
  Trash2,
} from 'lucide-react';
import { useCallback } from 'react';
import { sticky } from 'tippy.js';
import Table from '../extensions/Table/table';
import { ColorHighlightComponent } from './components/ColorHighlight';

export const TableBubbleMenu = ({ editor, appendTo }: MenuProps) => {
  const shouldShow = useCallback(
    ({ view, state, from }: ShouldShowProps) => {
      if (!state) {
        return false;
      }

      return isActive(state, Table.name);
    },
    [editor]
  );

  const onAddColumnBefore = useCallback(() => {
    editor.chain().focus().addColumnBefore().run();
  }, [editor]);

  const onAddColumnAfter = useCallback(() => {
    editor.chain().focus().addColumnAfter().run();
  }, [editor]);

  const onAddRowAbove = useCallback(() => {
    editor.chain().focus().addRowAfter().run();
  }, [editor]);
  const onAddRowBelow = useCallback(() => {
    editor.chain().focus().addRowBefore().run();
  }, [editor]);

  const onMergeCell = useCallback(() => {
    editor.chain().focus().mergeCells().run();
  }, [editor]);

  const onSplitCell = useCallback(() => {
    editor.chain().focus().splitCell().run();
  }, [editor]);

  const onDeleteColumn = useCallback(() => {
    editor.chain().focus().deleteColumn().run();
  }, [editor]);
  const onDeleteRow = useCallback(() => {
    editor.chain().focus().deleteRow().run();
  }, [editor]);
  const onDeleteTable = useCallback(() => {
    editor.chain().focus().deleteTable().run();
  }, [editor]);

  const getReferenceClientRect = useCallback(() => {
    const renderContainer = getRenderContainer(editor, 'tableWrapper');
    const rect =
      renderContainer?.getBoundingClientRect() ||
      new DOMRect(-1000, -1000, 0, 0);

    return rect;
  }, [editor]);
  return (
    <BaseBubbleMenu
      editor={editor}
      pluginKey="tableMenu"
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
      <div className="min-w-max flex flex-row h-full items-center leading-none gap-0.5 p-2 bg-background rounded-lg shadow-sm border border-border">
        <BetweenHorizontalEnd
          onClick={onAddRowAbove}
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'icon' }),
            'size-8 p-2',
            !editor?.can().addColumnBefore() &&
              'opacity-50 cursor-not-allowed pointer-events-none'
          )}
        />
        <BetweenHorizonalStart
          onClick={onAddRowBelow}
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'icon' }),
            'size-8 p-2',
            !editor?.can().addColumnAfter() &&
              'opacity-50 cursor-not-allowed pointer-events-none'
          )}
        />
        <ColumnDeleteIcon
          onClick={onDeleteRow}
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'icon' }),
            'size-8 p-2',
            !editor?.can().deleteColumn() &&
              'opacity-50 cursor-not-allowed pointer-events-none'
          )}
        />
        <Separator
          orientation="vertical"
          className="mx-1 me-2 h-[16px] dark:bg-white/35 bg-zinc-900"
        />
        <BetweenVerticalEnd
          onClick={onAddColumnBefore}
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'icon' }),
            'size-8 p-2',
            !editor?.can().addRowBefore() &&
              'opacity-50 cursor-not-allowed pointer-events-none'
          )}
        />
        <BetweenVerticalStart
          onClick={onAddColumnAfter}
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'icon' }),
            'size-8 p-2',
            !editor?.can().addRowAfter() &&
              'opacity-50 cursor-not-allowed pointer-events-none'
          )}
        />
        <RowDeleteIcon
          onClick={onDeleteColumn}
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'icon' }),
            'size-8 p-2',
            !editor?.can().deleteRow() &&
              'opacity-50 cursor-not-allowed pointer-events-none'
          )}
        />
        <Separator
          orientation="vertical"
          className="mx-1 me-2 h-[16px] dark:bg-white/35 bg-zinc-900"
        />
        <TableCellsMerge
          onClick={onMergeCell}
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'icon' }),
            'size-8 p-2',
            !editor?.can().mergeCells() &&
              'opacity-50 cursor-not-allowed pointer-events-none'
          )}
        />
        <TableCellsSplit
          onClick={onSplitCell}
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'icon' }),
            'size-8 p-2',
            !editor?.can().splitCell() &&
              'opacity-50 cursor-not-allowed pointer-events-none'
          )}
        />
        <Separator
          orientation="vertical"
          className="mx-1 me-2 h-[16px] dark:bg-white/35 bg-zinc-900"
        />
        <ColorHighlightComponent
          action={(color) => {
            if (typeof color === 'string')
              editor.chain().focus().setTableCellBackground(color).run();
            if (typeof color === 'undefined')
              editor.chain().focus().unsetTableCellBackground().run();
          }}
          disabled={editor?.can().setHighlight()}
        />
        <Trash2
          onClick={onDeleteTable}
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'icon' }),
            'size-8 p-2',
            !editor?.can().deleteTable() &&
              'opacity-50 cursor-not-allowed pointer-events-none'
          )}
        />
      </div>
    </BaseBubbleMenu>
  );
};

TableBubbleMenu.displayName = 'TableColumnMenu';

export default TableBubbleMenu;
