import { Editor, ReactRenderer } from '@tiptap/react';
import { SuggestionKeyDownProps, SuggestionProps } from '@tiptap/suggestion';
import tippy, { Instance } from 'tippy.js';

import EmojiList from './components/EmojiList';

export const emojiSuggestion = {
  items: ({ editor, query }: { editor: Editor; query: string }) =>
    editor.storage.emoji.emojis
      .filter(
        ({ shortcodes, tags }: { shortcodes: string[]; tags: string[] }) =>
          shortcodes.find((shortcode) =>
            shortcode.startsWith(query.toLowerCase())
          ) || tags.find((tag) => tag.startsWith(query.toLowerCase()))
      )
      .slice(0, 250),

  allowSpaces: false,

  render: () => {
    let component: ReactRenderer;
    let popup: Instance[] = []; // Treat popup as an array of instances

    return {
      onStart: (props: SuggestionProps<any>) => {
        component = new ReactRenderer(EmojiList, {
          props,
          editor: props.editor,
        });

        // Create the tippy instance(s), which are always handled as an array
        popup = tippy('body', {
          getReferenceClientRect: () => props.clientRect?.() || new DOMRect(),
          appendTo: () => document.body,
          content: component.element,
          showOnCreate: true,
          interactive: true,
          trigger: 'manual',
          placement: 'bottom-start',
        });
      },

      onUpdate(props: SuggestionProps<any>) {
        component.updateProps(props);

        // Safely handle updating props for all instances in the array
        popup.forEach((instance) => {
          instance.setProps({
            getReferenceClientRect: () => props.clientRect?.() || new DOMRect(),
          });
        });
      },

      onKeyDown(props: SuggestionKeyDownProps) {
        if (props.event.key === 'Escape') {
          // Safely hide all instances
          popup.forEach((instance) => instance.hide());
          component.destroy();

          return true;
        }

        return (component.ref as any)?.onKeyDown?.(props);
      },

      onExit() {
        // Safely destroy all instances
        popup.forEach((instance) => instance.destroy());
        component.destroy();
      },
    };
  },
};

export default emojiSuggestion;
