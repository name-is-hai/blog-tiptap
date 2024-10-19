import { Button } from '@/components/ui/button';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Check, ChevronDown, LucideIcon, Pilcrow } from 'lucide-react';
import {
  DEFAULT_FONT_SIZE_LIST,
  DEFAULT_FONT_SIZE_VALUE,
} from '@/lib/constants';

export type FontSizePickerProps = {
  onChange: (value: string) => void;
  value: string;
};

export const FontSizePicker = ({ onChange, value }: FontSizePickerProps) => {
  const currentValue = DEFAULT_FONT_SIZE_LIST.find((size) => size === value);
  const currentSizeLabel = currentValue ?? DEFAULT_FONT_SIZE_VALUE;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'ghost'}
          role="combobox"
          size={'icon'}
          className="w-fit p-2"
        >
          {currentSizeLabel}
          <ChevronDown className="ml-1 size-2" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit p-0">
        <Command>
          <CommandList>
            <ScrollArea className="h-[300px]">
              <CommandGroup>
                <CommandItem
                  className="flex gap-3 justify-between"
                  key={DEFAULT_FONT_SIZE_VALUE}
                  value={DEFAULT_FONT_SIZE_VALUE}
                  onSelect={onChange}
                >
                  {DEFAULT_FONT_SIZE_VALUE}
                  <Check
                    className={cn(
                      'mr-2 size-4',
                      DEFAULT_FONT_SIZE_VALUE === currentSizeLabel
                        ? 'opacity-100'
                        : 'opacity-0'
                    )}
                  />
                </CommandItem>
                {DEFAULT_FONT_SIZE_LIST.map((option) => (
                  <CommandItem
                    className="flex gap-3"
                    key={option}
                    value={option}
                    onSelect={onChange}
                  >
                    {option}
                    <Check
                      className={cn(
                        'mr-2 size-4',
                        option === currentValue ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
