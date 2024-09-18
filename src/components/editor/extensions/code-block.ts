import { CodeBlockLowlight as TipTapCodeBlockLowlight } from '@tiptap/extension-code-block-lowlight';
import { all, createLowlight } from 'lowlight';

const lowlight = createLowlight(all);
export const CodeBlockLowlight = TipTapCodeBlockLowlight.configure({
  lowlight,
  defaultLanguage: null,
});

export default CodeBlockLowlight;
