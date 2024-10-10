import {
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  ListTodo,
  Quote,
  SquareCode,
  Table,
  Minus,
  Columns2,
} from 'lucide-react';
import { Group } from './types';

export const GROUPS: Group[] = [
  {
    name: 'format',
    title: 'Format',
    commands: [
      {
        name: 'heading1',
        label: 'Heading 1',
        icon: Heading1,
        aliases: ['h1'],
        action: (editor) => {
          editor.chain().focus().setHeading({ level: 1 }).run();
        },
      },
      {
        name: 'heading2',
        label: 'Heading 2',
        icon: Heading2,
        aliases: ['h2'],
        action: (editor) => {
          editor.chain().focus().setHeading({ level: 2 }).run();
        },
      },
      {
        name: 'heading3',
        label: 'Heading 3',
        icon: Heading3,
        aliases: ['h3'],
        action: (editor) => {
          editor.chain().focus().setHeading({ level: 3 }).run();
        },
      },
      {
        name: 'bulletList',
        label: 'Bullet List',
        icon: List,
        aliases: ['ul'],
        action: (editor) => {
          editor.chain().focus().toggleBulletList().run();
        },
      },
      {
        name: 'numberedList',
        label: 'Numbered List',
        icon: ListOrdered,
        aliases: ['ol'],
        action: (editor) => {
          editor.chain().focus().toggleOrderedList().run();
        },
      },
      {
        name: 'taskList',
        label: 'Task List',
        icon: ListTodo,
        aliases: ['todo'],
        action: (editor) => {
          editor.chain().focus().toggleTaskList().run();
        },
      },
      // {
      //   name: 'toggleList',
      //   label: 'Toggle List',
      //   iconName: 'ListCollapse',
      //   description: 'Toggles can show and hide content',
      //   aliases: ['toggle'],
      //   action: (editor) => {
      //     editor.chain().focus().setDetails().run();
      //   },
      // },
      {
        name: 'blockquote',
        label: 'Blockquote',
        icon: Quote,
        action: (editor) => {
          editor.chain().focus().setBlockquote().run();
        },
      },
      {
        name: 'codeBlock',

        label: 'Code Block',
        icon: SquareCode,
        shouldBeHidden: (editor) => editor.isActive('columns'),
        action: (editor) => {
          editor.chain().focus().setCodeBlock().run();
        },
      },
    ],
  },
  {
    name: 'insert',
    title: 'Insert',
    commands: [
      {
        name: 'table',
        label: 'Table',
        icon: Table,
        shouldBeHidden: (editor) => editor.isActive('columns'),
        action: (editor) => {
          editor
            .chain()
            .focus()
            .insertTable({ rows: 3, cols: 3, withHeaderRow: false })
            .run();
        },
      },
      // {
      //   name: 'image',
      //   label: 'Image',
      //   iconName: 'Image',
      //   description: 'Insert an image',
      //   aliases: ['img'],
      //   action: (editor) => {
      //     editor.chain().focus().setImageUpload().run();
      //   },
      // },
      {
        name: 'columns',
        label: 'Columns',
        icon: Columns2,
        aliases: ['cols'],
        shouldBeHidden: (editor) => editor.isActive('columns'),
        action: (editor) => {
          editor
            .chain()
            .focus()
            .setColumns()
            .focus(editor.state.selection.head - 1)
            .run();
        },
      },
      { 
        name: 'horizontalRule',
        label: 'Horizontal Rule',
        icon: Minus,
        aliases: ['hr'],
        action: (editor) => {
          editor.chain().focus().setHorizontalRule().run();
        },
      },
      // {
      //   name: 'toc',
      //   label: 'Table of Contents',
      //   iconName: 'Book',
      //   aliases: ['outline'],
      //   description: 'Insert a table of contents',
      //   shouldBeHidden: (editor) => editor.isActive('columns'),
      //   action: (editor) => {
      //     editor.chain().focus().insertTableOfContents().run();
      //   },
      // },
    ],
  },
];

export default GROUPS;
