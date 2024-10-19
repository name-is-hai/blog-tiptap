import React from 'react';
import { Editor as CoreEditor } from '@tiptap/core';
import { Editor } from '@tiptap/react';
import { EditorState } from '@tiptap/pm/state';
import { EditorView } from '@tiptap/pm/view';
import {
  ALLOWED_BUTTON_VARIANT,
  ALLOWED_BUTTON_BORDER_RADIUS,
  ALLOWED_LOGO_ALIGNMENT,
} from '@/lib/constants';

export interface MenuProps {
  editor: Editor;
  appendTo?: React.RefObject<any>;
  shouldHide?: boolean;
}

export interface ShouldShowProps {
  editor?: CoreEditor;
  view: EditorView;
  state?: EditorState;
  oldState?: EditorState;
  from?: number;
  to?: number;
}

export type AllowedButtonVariant = (typeof ALLOWED_BUTTON_VARIANT)[number];

export type AllowedButtonBorderRadius =
  (typeof ALLOWED_BUTTON_BORDER_RADIUS)[number];

export type AllowedLogoAlignment = (typeof ALLOWED_LOGO_ALIGNMENT)[number];
