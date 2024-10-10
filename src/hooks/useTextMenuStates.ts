import { ShouldShowProps } from '@/components/editor/menus/types';
import { isCustomNodeSelected, isTextSelected } from '@/lib/utils';
import { Editor, useEditorState } from '@tiptap/react';
import { useCallback } from 'react';

export const useTextMenuStates = (editor: Editor) => {
  const states = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        Bold: {
          isActive: ctx.editor.isActive('bold'),
          disabled: () => !ctx.editor.can().chain().focus().toggleBold().run(),
        },
        Italic: {
          isActive: ctx.editor.isActive('italic'),
          disabled: () =>
            !ctx.editor.can().chain().focus().toggleItalic().run(),
        },
        Strike: {
          isActive: ctx.editor.isActive('strike'),
          disabled: () =>
            !ctx.editor.can().chain().focus().toggleStrike().run(),
        },
        Underline: {
          isActive: ctx.editor.isActive('underline'),
          disabled: () =>
            !ctx.editor.can().chain().focus().toggleUnderline().run(),
        },
        Code: {
          isActive: ctx.editor.isActive('code'),
          disabled: () => !ctx.editor.can().chain().focus().toggleCode().run(),
        },
        Subscript: {
          isActive: ctx.editor.isActive('subscript'),
          disabled: () =>
            !ctx.editor.can().chain().focus().toggleSubscript().run(),
        },
        Superscript: {
          isActive: ctx.editor.isActive('superscript'),
          disabled: () =>
            !ctx.editor.can().chain().focus().toggleSuperscript().run(),
        },
        AlignLeft: {
          isActive: ctx.editor.isActive({ textAlign: 'left' }),
          disabled: () =>
            !ctx.editor.can().chain().focus().setTextAlign('left').run(),
        },
        AlignCenter: {
          isActive: ctx.editor.isActive({ textAlign: 'center' }),
          disabled: () =>
            !ctx.editor.can().chain().focus().setTextAlign('center').run(),
        },
        AlignRight: {
          isActive: ctx.editor.isActive({ textAlign: 'right' }),
          disabled: () =>
            !ctx.editor.can().chain().focus().setTextAlign('right').run(),
        },
        AlignJustify: {
          isActive: ctx.editor.isActive({ textAlign: 'justify' }),
          disabled: () =>
            !ctx.editor.can().chain().focus().setTextAlign('justify').run(),
        },
        Color: {
          currentColor:
            ctx.editor.getAttributes('textStyle')?.color || undefined,
          disabled: () => !ctx.editor.can().chain().focus().setColor('').run(),
        },
        Highlight: {
          currentHighlight:
            ctx.editor.getAttributes('highlight')?.color || undefined,
          disabled: () =>
            ctx.editor.can().chain().focus().toggleHighlight().run(),
        },
        Size: {
          currentSize:
            ctx.editor.getAttributes('textStyle')?.fontSize || undefined,
          disabled: () =>
            !ctx.editor.can().chain().focus().setFontSize('').run(),
        },
      };
    },
  });

  const shouldShow = useCallback(
    ({ view, from }: ShouldShowProps) => {
      if (!view || editor.view.dragging) {
        return false;
      }

      const domAtPos = view.domAtPos(from || 0).node as HTMLElement;
      const nodeDOM = view.nodeDOM(from || 0) as HTMLElement;
      const node = nodeDOM || domAtPos;

      if (isCustomNodeSelected(editor, node)) {
        return false;
      }

      return isTextSelected({ editor });
    },
    [editor]
  );

  return {
    shouldShow,
    ...states,
  };
};
