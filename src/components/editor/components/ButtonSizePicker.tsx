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
import {
  DEFAULT_BUTTON_SIZE_LIST,
  DEFAULT_BUTTON_SIZE_VALUE,
} from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Check, ChevronDown } from 'lucide-react';

export type FontSizePickerProps = {
  onChange: (value: string) => void;
  value: string;
};

export const ButtonSizePicker = ({ onChange, value }: FontSizePickerProps) => {
  const currentValue = DEFAULT_BUTTON_SIZE_LIST.find((size) => size === value);
  const currentSizeLabel = currentValue ?? DEFAULT_BUTTON_SIZE_VALUE;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'ghost'}
          role="combobox"
          size={'icon'}
          className="w-14 p-2"
        >
          {currentSizeLabel}
          <ChevronDown className="ml-1 size-2" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {DEFAULT_BUTTON_SIZE_LIST.map((option) => (
                <CommandItem
                  className="flex gap-3"
                  key={option}
                  value={option}
                  onSelect={onChange}
                >
                  {option}
                  <Check
                    className={cn(
                      'size-4',
                      option === currentValue ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
