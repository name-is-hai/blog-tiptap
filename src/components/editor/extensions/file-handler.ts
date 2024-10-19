import { API } from '@/lib/api';
import TipTapFileHandler from '@tiptap-pro/extension-file-handler';

const FileHandler = TipTapFileHandler.configure({
  // allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
  onDrop: (currentEditor, files, pos) => {
    files.forEach(async (file) => {
      const url = await API.uploadImage(file);
      currentEditor.chain().setImageBlockAt({ pos, src: url }).focus().run();
    });
  },
  onPaste: (currentEditor, files) => {
    files.forEach(async (file) => {
      const url = await API.uploadImage(file);

      return currentEditor
        .chain()
        .setImageBlockAt({
          pos: currentEditor.state.selection.anchor,
          src: url,
        })
        .focus()
        .run();
    });
  },
});

export default FileHandler;
