import UniqueID from '@tiptap-pro/extension-unique-id';
import Blockquote from '@tiptap/extension-blockquote';
import Bold from '@tiptap/extension-bold';
import BulletList from '@tiptap/extension-bullet-list';
import Code from '@tiptap/extension-code';
import { Color } from '@tiptap/extension-color';
import Dropcursor from '@tiptap/extension-dropcursor';
import FocusClasses from '@tiptap/extension-focus';
import Highlight from '@tiptap/extension-highlight';
import History from '@tiptap/extension-history';
import Italic from '@tiptap/extension-italic';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import Paragraph from '@tiptap/extension-paragraph';
import Placeholder from '@tiptap/extension-placeholder';
import Strike from '@tiptap/extension-strike';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import Text from '@tiptap/extension-text';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Typography from '@tiptap/extension-typography';
import Underline from '@tiptap/extension-underline';

import Emoji from './extensions/Emoji/emoji';
import Column from './extensions/MultiColumn/Column';
import Columns from './extensions/MultiColumn/Columns';
import SlashCommand from './extensions/SlashCommand/slash-command';
import TableCellBackground from './extensions/Table/cell-background';
import Table from './extensions/Table/table';
import CodeBlockLowlight from './extensions/code-block';
import Document from './extensions/document';
import Figcaption from './extensions/figcaption';
import FontSize from './extensions/font-size';
import Heading from './extensions/heading';
import HorizontalRule from './extensions/horizontal-rule';
import ImageBlock from './extensions/image-block';
import Link from './extensions/link';
import Selection from './extensions/selection';
import { TrailingNode } from './extensions/trailing-node';
import { ButtonExtension } from './extensions/Button/button';

export const ExtensionsKit = () => [
  Placeholder.configure({
    includeChildren: true,
    showOnlyCurrent: false,
    placeholder: ({ node }) => {
      const nodeTypeName = node?.type?.name;
      if (nodeTypeName === 'heading') {
        return `Heading ${node.attrs.level}`;
      }
      if (nodeTypeName === 'table' || nodeTypeName === 'codeBlock') {
        return '';
      }
      // if (pos === 0) {
      // }
      return "Press '/' for commands";
    },
  }),
  Document,
  Paragraph,
  Text,
  Blockquote,
  BulletList,
  ListItem,
  CodeBlockLowlight,
  Heading,
  HorizontalRule,
  History,
  ImageBlock,
  Dropcursor.configure({
    width: 2,
    class: 'ProseMirror-dropcursor border-black',
  }),
  UniqueID.configure({
    types: ['paragraph', 'heading', 'blockquote', 'codeBlock', 'table'],
  }),
  Emoji,
  OrderedList,
  Figcaption,
  Table,
  TableCell,
  TableHeader,
  TableRow,
  TableCellBackground,
  TaskList,
  TaskItem.configure({
    nested: true,
  }),
  Bold,
  Code,
  Highlight.configure({ multicolor: true }),
  Italic,
  Link,
  Strike,
  Subscript,
  Superscript,
  TextStyle,
  Underline,
  Color,
  FocusClasses,
  Selection,
  FontSize,
  TextAlign.configure({
    types: ['heading', 'paragraph'],
  }),
  TrailingNode,
  Typography,
  SlashCommand,
  Columns,
  Column,
  ButtonExtension,
];
