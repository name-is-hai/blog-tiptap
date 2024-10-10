import { Editor } from '@tiptap/core';

import { LucideIcon } from 'lucide-react';

export interface Group {
  name: string;
  title: string;
  commands: CommandTool[];
}

export interface CommandTool {
  name: string;
  label: string;
  aliases?: string[];
  icon: LucideIcon;
  action: (editor: Editor) => void;
  shouldBeHidden?: (editor: Editor) => boolean;
}

export interface MenuListProps {
  editor: Editor;
  items: Group[];
  command: (command: CommandTool) => void;
}
