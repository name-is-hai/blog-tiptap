import { Editor } from '@tiptap/react';
import React from 'react';
import { Button } from '../ui/button';

export const ToggleBar = ({ editor }: { editor: Editor }) => {
  return (
    <>
      <Button
        size={'icon'}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        variant={editor.isActive('heading', { level: 1 }) ? 'default' : 'ghost'}
      >
        H1
      </Button>
      <Button
        size={'icon'}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        variant={editor.isActive('heading', { level: 2 }) ? 'default' : 'ghost'}
      >
        H2
      </Button>
      <Button
        size={'icon'}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        variant={editor.isActive('heading', { level: 3 }) ? 'default' : 'ghost'}
      >
        H3
      </Button>
      <Button
        size={'icon'}
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        variant={editor.isActive('heading', { level: 4 }) ? 'default' : 'ghost'}
      >
        H4
      </Button>
      <Button
        size={'icon'}
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        variant={editor.isActive('heading', { level: 5 }) ? 'default' : 'ghost'}
      >
        H5
      </Button>
      <Button
        size={'icon'}
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        variant={editor.isActive('heading', { level: 6 }) ? 'default' : 'ghost'}
      >
        H6
      </Button>
      <Button
        size={'icon'}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        variant={editor.isActive('blockquote') ? 'default' : 'ghost'}
      >
        bq
      </Button>
      <Button
        size={'icon'}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        variant={editor.isActive('bulletList') ? 'default' : 'ghost'}
      >
        bl
      </Button>
      <Button
        size={'icon'}
        onClick={() => editor.chain().focus().setButton().run()}
        variant={editor.isActive('codeBlock') ? 'default' : 'ghost'}
      >
        Button
      </Button>
    </>
  );
};
