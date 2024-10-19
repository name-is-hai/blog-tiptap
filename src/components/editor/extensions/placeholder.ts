import TipTapPlaceholder from '@tiptap/extension-placeholder';

const Placeholder = TipTapPlaceholder.configure({
  includeChildren: true,
  showOnlyCurrent: false,
  placeholder: ({ node, pos }) => {
    const nodeTypeName = node?.type?.name;
    if (nodeTypeName === 'heading') {
      return `Heading ${node.attrs.level}`;
    }
    if (nodeTypeName === 'blockquote') {
      return 'Enter a quote';
    }
    if (nodeTypeName === 'table' || nodeTypeName === 'codeBlock') {
      return '';
    }
    if (pos === 0) {
      return 'Click here to start writing …';
    }
    return "Press '/' for commands";
  },
});

export default Placeholder;
