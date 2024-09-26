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
import { useMemo } from 'react';

export type ContentTypePickerOption = {
  label: string;
  id: string;
  items: {
    label: string;
    id: string;
    disabled: () => boolean;
    isActive: () => boolean;
    onClick: () => void;
    icon: LucideIcon;
  }[];
};
export type ContentPickerOptions = ContentTypePickerOption[];

export type ContentTypePickerProps = {
  options: ContentTypePickerOption[];
};

export const ContentTypePicker = ({ options }: ContentTypePickerProps) => {
  const activeItem = useMemo(
    () =>
      options.flatMap((option) => option.items).find((item) => item.isActive()),
    [options]
  );
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'ghost'}
          role="combobox"
          size={'icon'}
          className="w-fit p-2"
        >
          {activeItem?.icon ? (
            <activeItem.icon className="size-4" />
          ) : (
            <Pilcrow className="size-4" />
          )}
          <ChevronDown className="ml-1 size-2" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit p-0">
        <Command>
          <CommandList>
            <ScrollArea className="h-[300px]">
              {options.map((option) => (
                <CommandGroup
                  heading={option.label}
                  key={option.id}
                >
                  {option.items.map((item) => (
                    <CommandItem
                      className="flex gap-3 justify-between"
                      key={item.id}
                      value={item.label}
                      onSelect={item.onClick}
                      disabled={item.disabled()}
                    >
                      {item.icon && <item.icon className="size-4" />}
                      {item.label}
                      <Check
                        className={cn(
                          'mr-2 size-4',
                          activeItem?.label === item.label
                            ? 'opacity-100'
                            : 'opacity-0'
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
