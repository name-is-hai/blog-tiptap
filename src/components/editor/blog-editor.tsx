'use client';

import { initialContent } from '@/lib/data/initialContent';
import { tiptapHtml } from '@/lib/tiptap-html';
import '@/styles/index.css';
import { EditorContent, generateHTML, useEditor } from '@tiptap/react';
import { useRef, useState } from 'react';
import { Button } from '../ui/button';
import { ExtensionsKit } from './extentions-kit';
import ColumnsMenu from './menus/ColumnsMenu';
import { ImageBubbleMenu } from './menus/ImageBubbleMenu';
import { LinkBubbleMenu } from './menus/LinkBubbleMenu';
import TableBubbleMenu from './menus/TableBubbleMenu';
import { TextBubbleMenu } from './menus/TextBubbleMenu';
import { ToggleBar } from './toggle-bar';
import { Card } from '../ui/card';

export const BlogEditor = () => {
  const [content, setContent] = useState('');
  const openNewWindow = () => {
    const newWindow = window.open('', '_blank');
    if (!newWindow) return;
    newWindow.document.write(tiptapHtml(content));
    newWindow.document.close();
  };
  const menuContainerRef = useRef(null);

  const editor = useEditor(
    {
      autofocus: true,
      onCreate: ({ editor }) => {
        if (editor.isEmpty) {
          editor.commands.setContent(initialContent);
          setContent(generateHTML(editor.getJSON(), ExtensionsKit()));
        }
      },
      extensions: ExtensionsKit(),
      editorProps: {
        attributes: {
          autocomplete: 'off',
          autocorrect: 'off',
          autocapitalize: 'off',
          class: 'min-h-full',
        },
      },
      immediatelyRender: false,
      onUpdate: ({ editor }) => {
        if (!editor.isEmpty) {
          setContent(generateHTML(editor.getJSON(), ExtensionsKit()));
          console.log(editor.getHTML());
        }
      },
    },
    []
  );
  if (!editor) {
    return null;
  }

  return (
    <div>
      <ToggleBar editor={editor} />
      <div
        className="flex h-full"
        ref={menuContainerRef}
      >
        <div className="relative flex flex-col flex-1 h-full overflow-hidden">
          <EditorContent
            editor={editor}
            className="flex-1 overflow-y-auto"
          />

          <ColumnsMenu
            editor={editor}
            appendTo={menuContainerRef}
          />
          <TextBubbleMenu
            editor={editor}
            appendTo={menuContainerRef}
          />
          <LinkBubbleMenu
            editor={editor}
            appendTo={menuContainerRef}
          />
          <TableBubbleMenu
            editor={editor}
            appendTo={menuContainerRef}
          />
          <ImageBubbleMenu
            editor={editor}
            appendTo={menuContainerRef}
          />
        </div>
      </div>
      <Button onClick={openNewWindow}>Preview</Button>
    </div>
  );
};
