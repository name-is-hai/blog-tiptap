import {
  useLinkEditorState
} from '@/components/editor/menus/components/LinkEditorPanel';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Switch } from '@/components/ui/switch';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Link } from 'lucide-react';
export type EditLinkPopoverProps = {
  onSetLink: (link: string, openInNewTab?: boolean) => void;
};

export const EditLinkPopover = ({ onSetLink }: EditLinkPopoverProps) => {
  const state = useLinkEditorState({
    onSetLink,
  });
  return (
    <TooltipProvider>
      <Tooltip>
        <Popover>
          <TooltipTrigger asChild>
            <PopoverTrigger asChild>
              <Button size={"icon"} variant={'ghost'}>
                <Link className="size-4" />
              </Button>
            </PopoverTrigger>
          </TooltipTrigger>
          <TooltipContent>Set Link</TooltipContent>
          <PopoverContent className="w-full">
            <form
              onSubmit={state.handleSubmit}
              className="flex items-center gap-2"
            >
              <label className="flex items-center gap-2 p-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 cursor-text">
                <Link className="flex-none text-black dark:text-white" />
                <input
                  type="url"
                  className="flex-1 bg-transparent outline-none min-w-[12rem] text-black text-sm dark:text-white"
                  placeholder="Enter URL"
                  value={state.url}
                  onChange={state.onChange}
                />
              </label>
              <Button
                size={'sm'}
                type="submit"
                disabled={!state.isValidUrl}
              >
                Set Link
              </Button>
            </form>
            <div className="mt-3">
              <label className="flex items-center justify-start gap-2 text-sm font-semibold cursor-pointer select-none text-neutral-500 dark:text-neutral-400">
                Open in new tab
                <Switch
                  checked={state.openInNewTab}
                  onCheckedChange={state.setOpenInNewTab}
                />
              </label>
            </div>
          </PopoverContent>
        </Popover>
      </Tooltip>
    </TooltipProvider>
  );
};
