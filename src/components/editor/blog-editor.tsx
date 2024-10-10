'use client';
import '@/styles/index.css';

import { initialContent } from '@/lib/data/initialContent';
import { EditorContent, useEditor } from '@tiptap/react';
import { useRef } from 'react';
import { Card } from '../ui/card';
import { ExtensionsKit } from './extentions-kit';
import ColumnsMenu from './menus/ColumnsMenu';
import { ImageBubbleMenu } from './menus/ImageBubbleMenu';
import { LinkBubbleMenu } from './menus/LinkBubbleMenu';
import TableBubbleMenu from './menus/TableBubbleMenu';
import { TextBubbleMenu } from './menus/TextBubbleMenu';
import { ToggleBar } from './toggle-bar';

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
      onUpdate: ({ editor }) => {
        if (!editor.isEmpty) {
          console.log(editor.getJSON());
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
              
            */}
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
      </Card>
    </div>
  );
};
