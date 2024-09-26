'use client';
import '@/styles/index.css';

import { initialContent } from '@/lib/data/initialContent';
import { EditorContent, useEditor } from '@tiptap/react';
import { useRef } from 'react';
import { Card } from '../ui/card';
import { ExtensionsKit } from './extentions-kit';
import { ImageBlockMenu } from './menus/ImageBlockMenu';
import { LinkMenu } from './menus/LinkMenu';
import TableBubbleMenu from './menus/TableBubbleMenu';
import { ToggleBar } from './toggle-bar';
import { TextMenu } from './menus/TextMenu';

export const BlogEditor = () => {
  const menuContainerRef = useRef(null);

  const editor = useEditor(
    {
      autofocus: true,
      onCreate: ({ editor }) => {
        if (editor.isEmpty) {
          editor.commands.setContent(initialContent);
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
    },
    []
  );
  if (!editor) {
    return null;
  }

  return (
    <div>
      <ToggleBar editor={editor} />
      <Card>
        <div
          className="flex h-full"
          ref={menuContainerRef}
        >
          <div className="relative flex flex-col flex-1 h-full overflow-hidden">
            <EditorContent
              editor={editor}
              className="flex-1 overflow-y-auto"
            />
            {/* <ContentItemMenu editor={editor} />
              
              <ColumnsMenu
              editor={editor}
              appendTo={menuContainerRef}
            />*/}
            <TextMenu
              editor={editor}
              appendTo={menuContainerRef}
            />
            <LinkMenu
              editor={editor}
              appendTo={menuContainerRef}
            />
            <TableBubbleMenu
              editor={editor}
              appendTo={menuContainerRef}
            />
            <ImageBlockMenu
              editor={editor}
              appendTo={menuContainerRef}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
