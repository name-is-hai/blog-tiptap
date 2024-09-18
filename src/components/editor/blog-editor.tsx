'use client';
import '@/styles/index.css';

import { EditorContent, useEditor } from '@tiptap/react';
import { useRef } from 'react';
import { Card } from '../ui/card';
import { ImageBlockMenu } from './extensions/ImageBlock/components/ImageBlockMenu';
import { ExtensionsKit } from './extentions-kit';
import TableBubbleMenu from './menus/TableBubbleMenu';
import { ToggleBar } from './toggle-bar';

export const BlogEditor = () => {
  const menuContainerRef = useRef(null);

  const editor = useEditor(
    {
      autofocus: true,
      // onCreate: ({ editor }) => {
      //   if (editor.isEmpty) {
      //     editor.commands.setContent(initialContent);
      //   }
      // },
      content: `
      <p>Cyndi Lauper</p>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th colspan="3">Description</th>
            </tr>
            <tr>
              <td>Cyndi Lauper</td>
              <td>Singer</td>
              <td>Songwriter</td>
              <td>Actress</td>
            </tr>
          </tbody>
        </table>
      `,
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
              <LinkMenu
                editor={editor}
                appendTo={menuContainerRef}
              />
              <TextMenu editor={editor} />
              <ColumnsMenu
                editor={editor}
                appendTo={menuContainerRef}
              />*/}
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
