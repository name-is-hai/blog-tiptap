import emojiSuggestion from './suggestion';
import { Emoji as TipTapEmoji } from '@tiptap-pro/extension-emoji';
export const Emoji = TipTapEmoji.configure({
  enableEmoticons: true,
  suggestion: emojiSuggestion,
});

export default Emoji;
