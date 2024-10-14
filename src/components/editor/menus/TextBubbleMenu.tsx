import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { useTextMenuCommands } from '@/hooks/useTextMenuCommands';
import { useTextMenuContentTypes } from '@/hooks/useTextMenuContentTypes';
import { useTextMenuStates } from '@/hooks/useTextMenuStates';
import { BubbleMenu, Editor } from '@tiptap/react';
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Code,
  EllipsisVertical,
  FileCode,
  Italic,
  Strikethrough,
  Subscript,
  Superscript,
  Underline,
} from 'lucide-react';
import { memo } from 'react';
import { ContentTypePicker } from './TextMenu/ContentTypePicker';
import { EditLinkPopover } from './TextMenu/EditLinkPopover';
import { FontSizePicker } from './TextMenu/FontSizePicker';
import { ColorHighlightComponent } from './components/ColorHighlight';
import { TextHighlight } from './components/TextHighlight';
import { MenuProps } from './types';

// We memorize the button so each button is not rerendered
// on every editor state change
const MemoFontSizePicker = memo(FontSizePicker);
const MemoContentTypePicker = memo(ContentTypePicker);

export type TextMenuProps = {
  editor: Editor;
};

export const TextBubbleMenu = ({ editor, appendTo }: MenuProps) => {
  const commands = useTextMenuCommands(editor);
  const states = useTextMenuStates(editor);
  const blockOptions = useTextMenuContentTypes(editor);

  return (
    <BubbleMenu
      editor={editor}
      pluginKey="textMenu"
      shouldShow={states.shouldShow}
      updateDelay={100}
      tippyOptions={{
        moveTransition: 'transform 0.15s ease-out',
        zIndex: 20,
        appendTo: () => {
          return appendTo?.current;
        },
        popperOptions: {
          placement: 'top-start',
          modifiers: [
            {
              name: 'preventOverflow',
              options: {
                boundary: 'viewport',
                padding: 8,
              },
            },
            {
              name: 'flip',
              options: {
                fallbackPlacements: ['bottom-start', 'top-end', 'bottom-end'],
              },
            },
          ],
        },
        maxWidth: 'calc(100vw - 16px)',
      }}
    >
      <div className="min-w-max flex flex-row h-full justify-center items-center leading-none gap-0.5 p-1 bg-background rounded-lg shadow-sm border border-border">
        <MemoContentTypePicker options={blockOptions} />
        <MemoFontSizePicker
          onChange={commands.onSetFontSize}
          value={states.Size.currentSize || ''}
        />
        <Separator
          orientation="vertical"
          className="mx-1 me-2 h-[16px] dark:bg-white/35 bg-zinc-900"
        />
        <Button
          disabled={states.Bold.disabled()}
          size={'icon'}
          onClick={commands.onBold}
          variant={states.Bold.isActive ? 'default' : 'ghost'}
        >
          <Bold className="size-4" />
        </Button>
        <Button
          disabled={states.Italic.disabled()}
          size={'icon'}
          onClick={commands.onItalic}
          variant={states.Italic.isActive ? 'default' : 'ghost'}
        >
          <Italic className="size-4" />
        </Button>
        <Button
          disabled={states.Underline.disabled()}
          size={'icon'}
          onClick={commands.onUnderline}
          variant={states.Underline.isActive ? 'default' : 'ghost'}
        >
          <Underline className="size-4" />
        </Button>
        <Button
          disabled={states.Strike.disabled()}
          size={'icon'}
          onClick={commands.onStrike}
          variant={states.Strike.isActive ? 'default' : 'ghost'}
        >
          <Strikethrough className="size-4" />
        </Button>
        <Button
          disabled={states.Code.disabled()}
          size={'icon'}
          onClick={commands.onCode}
          variant={states.Code.isActive ? 'default' : 'ghost'}
        >
          <Code className="size-4" />
        </Button>
        <Button
          size={'icon'}
          variant={'ghost'}
          onClick={commands.onCodeBlock}
        >
          <FileCode className="size-4" />
        </Button>
        <EditLinkPopover onSetLink={commands.onLink} />
        <Separator
          orientation="vertical"
          className="mx-1 me-2 h-[16px] dark:bg-white/35 bg-zinc-900"
        />
        <TextHighlight
          action={(color) => {
            if (typeof color === 'string') commands.onChangeColor(color);
            if (typeof color === 'undefined') commands.onClearColor();
          }}
          disabled={states.Color.disabled()}
        />
        <ColorHighlightComponent
          action={(color) => {
            if (typeof color === 'string') commands.onChangeHighlight(color);
            if (typeof color === 'undefined') commands.onClearHighlight();
          }}
          disabled={states.Highlight.disabled()}
        />
        <Popover>
          <PopoverTrigger asChild>
            <Button
              size={'icon'}
              variant={'ghost'}
            >
              <EllipsisVertical className="size-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-1 min-w-fit flex flex-row h-full items-center justify-center leading-none gap-0.5 bg-background rounded-lg shadow-sm border border-border">
            <Button
              disabled={states.Subscript.disabled()}
              size={'icon'}
              onClick={commands.onSubscript}
              variant={states.Subscript.isActive ? 'default' : 'ghost'}
            >
              <Subscript className="size-4" />
            </Button>
            <Button
              disabled={states.Superscript.disabled()}
              size={'icon'}
              onClick={commands.onSuperscript}
              variant={states.Superscript.isActive ? 'default' : 'ghost'}
            >
              <Superscript className="size-4" />
            </Button>
            <Separator
              orientation="vertical"
              className="mx-1 me-2 h-[16px] dark:bg-white/35 bg-zinc-900"
            />
            <Button
              disabled={states.AlignLeft.disabled()}
              size={'icon'}
              onClick={commands.onAlignLeft}
              variant={states.AlignLeft.isActive ? 'default' : 'ghost'}
            >
              <AlignLeft className="size-4" />
            </Button>
            <Button
              disabled={states.AlignCenter.disabled()}
              size={'icon'}
              onClick={commands.onAlignCenter}
              variant={states.AlignCenter.isActive ? 'default' : 'ghost'}
            >
              <AlignCenter className="size-4" />
            </Button>
            <Button
              disabled={states.AlignRight.disabled()}
              size={'icon'}
              onClick={commands.onAlignRight}
              variant={states.AlignRight.isActive ? 'default' : 'ghost'}
            >
              <AlignRight className="size-4" />
            </Button>
            <Button
              disabled={states.AlignJustify.disabled()}
              size={'icon'}
              onClick={commands.onAlignJustify}
              variant={states.AlignJustify.isActive ? 'default' : 'ghost'}
            >
              <AlignJustify className="size-4" />
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </BubbleMenu>
  );
};
