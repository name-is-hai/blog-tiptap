import Paragraph from '@tiptap/extension-paragraph';
import Document from './extensions/document';
import Heading from './extensions/heading';
import Text from '@tiptap/extension-text';

export const ExtensionsKit = () => [
  Document,
  Paragraph,
  Text,
  Heading.configure({
    levels: [1, 2, 3, 4, 5, 6],
  }),
];
