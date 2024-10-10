import { Button } from '@/components/ui/button';
import { Popover, PopoverContent } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { PopoverTrigger } from '@radix-ui/react-popover';
import { EllipsisVertical, Subscript, Superscript } from 'lucide-react';

export const TextStyle = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>
          <EllipsisVertical />
        </Button>
      </PopoverTrigger>
      <PopoverContent asChild>
        <Button>
          <Subscript />
        </Button>
        <Button>
          <Superscript />
        </Button>
        <Separator
          orientation="vertical"
          className="mx-1 me-2 h-[16px] dark:bg-white/35 bg-zinc-900"
        />
        <Button>
          <Subscript />
        </Button>
      </PopoverContent>
    </Popover>
  );
};
