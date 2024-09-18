import UniqueID from '@tiptap-pro/extension-unique-id';
import Blockquote from '@tiptap/extension-blockquote';
import BulletList from '@tiptap/extension-bullet-list';
import Dropcursor from '@tiptap/extension-dropcursor';
import History from '@tiptap/extension-history';
import ListItem from '@tiptap/extension-list-item';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Emoji from './extensions/Emoji/emoji';
import Figcaption from './extensions/figcaption';
import ImageBlock from './extensions/ImageBlock/image-block';
import CodeBlockLowlight from './extensions/code-block';
import Document from './extensions/document';
import Heading from './extensions/heading';
import HorizontalRule from './extensions/horizontal-rule';
import OrderedList from '@tiptap/extension-ordered-list';
import Table from './extensions/Table/Table';
import { TableCell } from './extensions/Table/Cell';
import TableHeader from './extensions/Table/Header';
import TableRow from '@tiptap/extension-table-row';

export const ExtensionsKit = () => [
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
  // Figcaption,
  Table,
  TableCell,
  TableHeader,
  TableRow,
];
