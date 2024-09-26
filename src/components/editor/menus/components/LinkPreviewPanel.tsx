import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Pen, Trash2 } from 'lucide-react';

export type LinkPreviewPanelProps = {
  url: string;
  isOpenInNewTab: boolean;
  onEdit: () => void;
  onClear: () => void;
};

export const LinkPreviewPanel = ({
  isOpenInNewTab,
  onClear,
  onEdit,
  url,
}: LinkPreviewPanelProps) => {
  return (
    <Card className="flex items-center">
      <a
        href={url}
        target={isOpenInNewTab ? '_blank' : '_self'}
        rel="noopener noreferrer"
        className="text-sm underline break-all p-3 line-clamp-2"
      >
        {url}
      </a>
      <Separator
        orientation="vertical"
        className="mx-1 me-2 h-[20px] dark:bg-white/35 bg-zinc-900"
      />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button
              onClick={onEdit}
              variant={'ghost'}
              size={'icon'}
            >
              <Pen className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Edit link</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Button
              onClick={onClear}
              variant={'ghost'}
              size={'icon'}
            >
              <Trash2 className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Remove link</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Card>
  );
};
