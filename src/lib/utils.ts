import { ButtonExtension } from '@/components/editor/extensions/Button/button';
import HorizontalRule from '@/components/editor/extensions/horizontal-rule';
import ImageBlock from '@/components/editor/extensions/image-block';
import Link from '@/components/editor/extensions/link';
import { CodeBlock } from '@tiptap/extension-code-block';
import { Editor, isTextSelection } from '@tiptap/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRenderContainer = (
  editor: Editor,
  nodeType: string
): HTMLElement | null => {
  const {
    view,
    state: {
      selection: { from },
    },
  } = editor;

  const elements = document.querySelectorAll('.has-focus');
  const elementCount = elements.length;
  const innermostNode = elements[elementCount - 1];
  const element = innermostNode as HTMLElement | null;

  if (
    (element &&
      element.getAttribute('data-type') &&
      element.getAttribute('data-type') === nodeType) ||
    (element && element.classList && element.classList.contains(nodeType))
  ) {
    return element;
  }

  const node = view.domAtPos(from).node as HTMLElement;
  let container: HTMLElement | null = node;

  if (!container.tagName) {
    container = node.parentElement;
  }

  while (
    container &&
    !(
      container.getAttribute('data-type') &&
      container.getAttribute('data-type') === nodeType
    ) &&
    !container.classList.contains(nodeType)
  ) {
    container = container.parentElement;
  }

  return container;
};
export const isTextSelected = ({ editor }: { editor: Editor }) => {
  const {
    state: {
      doc,
      selection,
      selection: { empty, from, to },
    },
  } = editor;
  const isEmptyTextBlock =
    !doc.textBetween(from, to).length && isTextSelection(selection);

  if (empty || isEmptyTextBlock || !editor.isEditable) {
    return false;
  }

  return true;
};

export const isTableCellSelected = (node: HTMLElement) => {
  let container = node;

  while (container && !['TD', 'TH'].includes(container.tagName)) {
    container = container.parentElement!;
  }

  const cell =
    container &&
    container.querySelector &&
    container.querySelector('.selectedCell');
  return cell ? true : false;
};

export const isCustomNodeSelected = (editor: Editor, node: HTMLElement) => {
  const customNodes = [
    HorizontalRule.name,
    ImageBlock.name,
    // ImageUpload.name,
    CodeBlock.name,
    ImageBlock.name,
    Link.name,
    ButtonExtension.name,
  ];

  return (
    customNodes.some((type) => editor.isActive(type)) ||
    isTableCellSelected(node)
  );
};
