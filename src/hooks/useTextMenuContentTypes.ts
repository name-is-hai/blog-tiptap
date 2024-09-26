import { ContentPickerOptions } from '@/components/editor/menus/TextMenu/ContentTypePicker';
import { Editor, useEditorState } from '@tiptap/react';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  List,
  ListOrdered,
  ListTodo,
  Pilcrow,
} from 'lucide-react';
export const useTextMenuContentTypes = (editor: Editor) => {
  return useEditorState({
    editor,
    selector: (ctx): ContentPickerOptions => [
      {
        label: 'Hierarchy',
        id: 'hierarchy',
        items: [
          {
            icon: Pilcrow,
            onClick: () =>
              ctx.editor
                .chain()
                .focus()
                .lift('taskItem')
                .liftListItem('listItem')
                .setParagraph()
                .run(),
            id: 'paragraph',
            disabled: () => !ctx.editor.can().setParagraph(),
            isActive: () =>
              ctx.editor.isActive('paragraph') &&
              !ctx.editor.isActive('orderedList') &&
              !ctx.editor.isActive('bulletList') &&
              !ctx.editor.isActive('taskList'),
            label: 'Paragraph',
          },
          {
            icon: Heading1,
            onClick: () =>
              ctx.editor
                .chain()
                .focus()
                .lift('taskItem')
                .liftListItem('listItem')
                .setHeading({ level: 1 })
                .run(),
            id: 'heading1',
            disabled: () => !ctx.editor.can().setHeading({ level: 1 }),
            isActive: () => ctx.editor.isActive('heading', { level: 1 }),
            label: 'Heading 1',
          },
          {
            icon: Heading2,
            onClick: () =>
              ctx.editor
                .chain()
                .focus()
                .lift('taskItem')
                .liftListItem('listItem')
                .setHeading({ level: 2 })
                .run(),
            id: 'heading2',
            disabled: () => !ctx.editor.can().setHeading({ level: 2 }),
            isActive: () => ctx.editor.isActive('heading', { level: 2 }),
            label: 'Heading 2',
          },
          {
            icon: Heading3,
            onClick: () =>
              ctx.editor
                .chain()
                .focus()
                .lift('taskItem')
                .liftListItem('listItem')
                .setHeading({ level: 3 })
                .run(),
            id: 'heading3',
            disabled: () => !ctx.editor.can().setHeading({ level: 3 }),
            isActive: () => ctx.editor.isActive('heading', { level: 3 }),
            label: 'Heading 3',
          },
          {
            icon: Heading4,
            onClick: () =>
              ctx.editor
                .chain()
                .focus()
                .lift('taskItem')
                .liftListItem('listItem')
                .setHeading({ level: 4 })
                .run(),
            id: 'heading4',
            disabled: () => !ctx.editor.can().setHeading({ level: 4 }),
            isActive: () => ctx.editor.isActive('heading', { level: 4 }),
            label: 'Heading 4',
          },
          {
            icon: Heading5,
            onClick: () =>
              ctx.editor
                .chain()
                .focus()
                .lift('taskItem')
                .liftListItem('listItem')
                .setHeading({ level: 5 })
                .run(),
            id: 'heading5',
            disabled: () => !ctx.editor.can().setHeading({ level: 5 }),
            isActive: () => ctx.editor.isActive('heading', { level: 5 }),
            label: 'Heading 5',
          },
          {
            icon: Heading6,
            onClick: () =>
              ctx.editor
                .chain()
                .focus()
                .lift('taskItem')
                .liftListItem('listItem')
                .setHeading({ level: 6 })
                .run(),
            id: 'heading6',
            disabled: () => !ctx.editor.can().setHeading({ level: 6 }),
            isActive: () => ctx.editor.isActive('heading', { level: 6 }),
            label: 'Heading 6',
          },
        ],
      },
      {
        label: 'Lists',
        id: 'lists',
        items: [
          {
            icon: List,
            onClick: () => ctx.editor.chain().focus().toggleBulletList().run(),
            id: 'bulletList',
            disabled: () => !ctx.editor.can().toggleBulletList(),
            isActive: () => ctx.editor.isActive('bulletList'),
            label: 'Bullet list',
          },
          {
            icon: ListOrdered,
            onClick: () => ctx.editor.chain().focus().toggleOrderedList().run(),
            id: 'orderedList',
            disabled: () => !ctx.editor.can().toggleOrderedList(),
            isActive: () => ctx.editor.isActive('orderedList'),
            label: 'Numbered list',
          },
          {
            icon: ListTodo,
            onClick: () => ctx.editor.chain().focus().toggleTaskList().run(),
            id: 'todoList',
            disabled: () => !ctx.editor.can().toggleTaskList(),
            isActive: () => ctx.editor.isActive('taskList'),
            label: 'Todo list',
          },
        ],
      },
    ],
  });
};
