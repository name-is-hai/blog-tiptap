import { ColorPicker } from '@/components/editor/menus/components/ColorPicker';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useTextMenuCommands } from '@/hooks/useTextMenuCommands';
import { useTextMenuContentTypes } from '@/hooks/useTextMenuContentTypes';
import { useTextMenuStates } from '@/hooks/useTextMenuStates';
import { BubbleMenu, Editor } from '@tiptap/react';
import {
  Bold,
  Code,
  FileCode,
  Italic,
  Strikethrough,
  Underline,
} from 'lucide-react';
import { memo } from 'react';
import { ContentTypePicker } from './TextMenu/ContentTypePicker';
import { EditLinkPopover } from './TextMenu/EditLinkPopover';
import { FontSizePicker } from './TextMenu/FontSizePicker';
import { MenuProps } from './types';

// We memorize the button so each button is not rerendered
// on every editor state change
const MemoButton = memo(Button);
const MemoColorPicker = memo(ColorPicker);
const MemoFontSizePicker = memo(FontSizePicker);
const MemoContentTypePicker = memo(ContentTypePicker);

export type TextMenuProps = {
  editor: Editor;
};

export const TextMenu = ({ editor, appendTo }: MenuProps) => {
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
      <div className="min-w-max flex flex-row h-full items-center leading-none gap-0.5 p-1 bg-background rounded-lg shadow-sm border border-border">
        <MemoContentTypePicker options={blockOptions} />
        <MemoFontSizePicker
          onChange={commands.onSetFontSize}
          value={states.Size.currentSize || ''}
        />
        <Separator
          orientation="vertical"
          className="mx-1 me-2 h-[16px] dark:bg-white/35 bg-zinc-900"
        />
        <MemoButton
          disabled={states.Bold.disabled()}
          size={'icon'}
          onClick={commands.onBold}
          variant={states.Bold.isActive ? 'default' : 'ghost'}
        >
          <Bold className="size-4" />
        </MemoButton>
        <MemoButton
          disabled={states.Italic.disabled()}
          size={'icon'}
          onClick={commands.onItalic}
          variant={states.Italic.isActive ? 'default' : 'ghost'}
        >
          <Italic className="size-4" />
        </MemoButton>
        <MemoButton
          disabled={states.Underline.disabled()}
          size={'icon'}
          onClick={commands.onUnderline}
          variant={states.Underline.isActive ? 'default' : 'ghost'}
        >
          <Underline className="size-4" />
        </MemoButton>
        <MemoButton
          disabled={states.Strike.disabled()}
          size={'icon'}
          onClick={commands.onStrike}
          variant={states.Strike.isActive ? 'default' : 'ghost'}
        >
          <Strikethrough className="size-4" />
        </MemoButton>
        <MemoButton
          disabled={states.Code.disabled()}
          size={'icon'}
          onClick={commands.onCode}
          variant={states.Code.isActive ? 'default' : 'ghost'}
        >
          <Code className="size-4" />
        </MemoButton>
        <MemoButton
          size={'icon'}
          variant={'ghost'}
          onClick={commands.onCodeBlock}
        >
          <FileCode className="size-4" />
        </MemoButton>
        <EditLinkPopover onSetLink={commands.onLink} />
        {/* <Popover.Root>
          <Popover.Trigger asChild>
            <MemoButton
              active={!!states.currentHighlight}
              tooltip="Highlight text"
            >
              <Icon name="Highlighter" />
            </MemoButton>
          </Popover.Trigger>
          <Popover.Content
            side="top"
            sideOffset={8}
            asChild
          >
            <Surface className="p-1">
              <MemoColorPicker
                color={states.currentHighlight}
                onChange={commands.onChangeHighlight}
                onClear={commands.onClearHighlight}
              />
            </Surface>
          </Popover.Content>
        </Popover.Root>
        <Popover.Root>
          <Popover.Trigger asChild>
            <MemoButton
              active={!!states.currentColor}
              tooltip="Text color"
            >
              <Icon name="Palette" />
            </MemoButton>
          </Popover.Trigger>
          <Popover.Content
            side="top"
            sideOffset={8}
            asChild
          >
            <Surface className="p-1">
              <MemoColorPicker
                color={states.currentColor}
                onChange={commands.onChangeColor}
                onClear={commands.onClearColor}
              />
            </Surface>
          </Popover.Content>
        </Popover.Root>
        <Popover.Root>
          <Popover.Trigger asChild>
            <MemoButton tooltip="More options">
              <Icon name="EllipsisVertical" />
            </MemoButton>
          </Popover.Trigger>
          <Popover.Content
            side="top"
            asChild
          >
            <Toolbar.Wrapper>
              <MemoButton
                tooltip="Subscript"
                tooltipShortcut={['Mod', '.']}
                onClick={commands.onSubscript}
                active={states.isSubscript}
              >
                <Icon name="Subscript" />
              </MemoButton>
              <MemoButton
                tooltip="Superscript"
                tooltipShortcut={['Mod', ',']}
                onClick={commands.onSuperscript}
                active={states.isSuperscript}
              >
                <Icon name="Superscript" />
              </MemoButton>
              <Toolbar.Divider />
              <MemoButton
                tooltip="Align left"
                tooltipShortcut={['Shift', 'Mod', 'L']}
                onClick={commands.onAlignLeft}
                active={states.isAlignLeft}
              >
                <Icon name="AlignLeft" />
              </MemoButton>
              <MemoButton
                tooltip="Align center"
                tooltipShortcut={['Shift', 'Mod', 'E']}
                onClick={commands.onAlignCenter}
                active={states.isAlignCenter}
              >
                <Icon name="AlignCenter" />
              </MemoButton>
              <MemoButton
                tooltip="Align right"
                tooltipShortcut={['Shift', 'Mod', 'R']}
                onClick={commands.onAlignRight}
                active={states.isAlignRight}
              >
                <Icon name="AlignRight" />
              </MemoButton>
              <MemoButton
                tooltip="Justify"
                tooltipShortcut={['Shift', 'Mod', 'J']}
                onClick={commands.onAlignJustify}
                active={states.isAlignJustify}
              >
                <Icon name="AlignJustify" />
              </MemoButton>
            </Toolbar.Wrapper>
          </Popover.Content>
        </Popover.Root>*/}
      </div>
    </BubbleMenu>
  );
};
