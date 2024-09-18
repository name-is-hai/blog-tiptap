import TiptapTableHeader from '@tiptap/extension-table-header';


export const TableHeader = TiptapTableHeader.extend({
  addAttributes() {
    return {
      colspan: {
        default: 1,
      },
      rowspan: {
        default: 1,
      },
      colwidth: {
        default: null,
        parseHTML: (element) => {
          const colwidth = element.getAttribute('colwidth');
          const value = colwidth ? colwidth.split(',').map((item) => parseInt(item, 10)) : null;

          return value;
        },
      },
      style: {
        default: null,
      },
    };
  },
});

export default TableHeader;
