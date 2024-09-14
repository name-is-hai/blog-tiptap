'use client';
import '@/styles/index.css';

import { EditorContent, useEditor } from '@tiptap/react';
import React, { useMemo, useRef } from 'react';
import { ExtensionsKit } from './extentions-kit';
import { EditorContext } from '@/context/EditorContext';
import { Button } from '../ui/button';

export const BlogEditor = () => {
  const editor = useEditor(
    {
      autofocus: true,
      onCreate: ({ editor }) => {
        if (editor.isEmpty) {
          editor.commands.setContent(`
        <h1>This is a 1st level heading</h1>
        <h2>This is a 2nd level heading</h2>
        <h3>This is a 3rd level heading</h3>
      `);
        }
      },
      extensions: ExtensionsKit(),
      immediatelyRender: false,
    },
    []
  );
  if (!editor) {
    return null;
  }
  return (
    <div>
      <Button
        onClick={() =>
          editor.chain().focus().clearNodes().toggleHeading({ level: 1 }).run()
        }
        variant={editor.isActive('heading', { level: 1 }) ? 'default' : 'ghost'}
      >
        H1
      </Button>
      <Button
        onClick={() =>
          editor.chain().focus().clearNodes().toggleHeading({ level: 2 }).run()
        }
        variant={editor.isActive('heading', { level: 2 }) ? 'default' : 'ghost'}
      >
        H2
      </Button>
      <Button
        onClick={() =>
          editor.chain().focus().clearNodes().toggleHeading({ level: 3 }).run()
        }
        variant={editor.isActive('heading', { level: 3 }) ? 'default' : 'ghost'}
      >
        H3
      </Button>
      <EditorContent editor={editor} />
    </div>
  );
  {
    /* <div className="relative flex flex-col flex-1 h-full overflow-hidden">
          <EditorHeader
            characters={characterCount.characters()}
            collabState={collabState}
            users={displayedUsers}
            words={characterCount.words()}
            isSidebarOpen={leftSidebar.isOpen}
            toggleSidebar={leftSidebar.toggle}
          />

          <ContentItemMenu editor={editor} />
          <LinkMenu
            editor={editor}
            appendTo={menuContainerRef}
          />
          <TextMenu editor={editor} />
          <ColumnsMenu
            editor={editor}
            appendTo={menuContainerRef}
          />
          <TableRowMenu
            editor={editor}
            appendTo={menuContainerRef}
          />
          <TableColumnMenu
            editor={editor}
            appendTo={menuContainerRef}
          />
          <ImageBlockMenu
            editor={editor}
            appendTo={menuContainerRef}
          />
        </div> */
  }
};
