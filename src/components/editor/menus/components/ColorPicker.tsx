import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { COLORS_LIST, DEFAULT_COLOR } from '@/lib/constants';
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from 'react';

interface Props {
  children: React.ReactNode;
  modelValue?: string;
  highlight?: boolean;
  disabled?: boolean;
  onChange?: (color: string | undefined) => void;
  onModelValueChange?: (color: string | undefined) => void;
}

export const ColorPicker = ({
  modelValue = '',
  highlight = false,
  disabled = false,
  onChange,
  children,
}: Props) => {
  const html5Color = useRef<HTMLInputElement | null>(null);
  const [recentColors, setRecentColors] = useState<string[]>([]);
  const [tempColor, setTempColor] = useState<string | undefined>(undefined);

  const localStorageKey = useMemo(
    () => (highlight ? 'recentColorsHighlight' : 'recentColors'),
    [highlight]
  );

  useEffect(() => {
    const storedColors = localStorage.getItem(localStorageKey);
    if (storedColors) {
      setRecentColors(JSON.parse(storedColors));
    }
  }, [localStorageKey]);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(recentColors));
  }, [recentColors, localStorageKey]);

  const chunkedColors = useMemo(() => {
    return COLORS_LIST.reduce((chunks, color, index) => {
      const chunkIndex = Math.floor(index / 10);
      if (!chunks[chunkIndex]) chunks[chunkIndex] = [];
      chunks[chunkIndex].push(color);
      return chunks;
    }, [] as string[][]);
  }, []);

  const updateRecentColors = useCallback((color: string) => {
    setRecentColors((prevColors) => {
      const filteredColors = prevColors.filter((c) => c !== color);
      return [color, ...filteredColors.slice(0, 9)];
    });
  }, []);

  const handleSetColor = useCallback(
    (color: string | undefined) => {
      const isCorrectColor = color
        ? /^#([0-9A-F]{3}){1,2}$/i.test(color)
        : true;

      if (isCorrectColor) {
        setTempColor(color);
        onChange?.(color);
      }
    },
    [onChange]
  );

  const handlePopoverClose = useCallback(() => {
    if (tempColor) {
      updateRecentColors(tempColor);
    }
    setTempColor(undefined);
  }, [tempColor, updateRecentColors]);

  return (
    <Popover onOpenChange={(open) => open && !disabled && handlePopoverClose()}>
      <PopoverTrigger disabled={disabled}>{children}</PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col">
          <div
            className="flex items-center p-1 cursor-pointer hover:bg-accent"
            onClick={() => handleSetColor(undefined)}
          >
            <span className="w-6 h-6 p-0.5 inline-block rounded-sm border">
              <span
                style={{
                  backgroundColor: highlight ? 'transparent' : DEFAULT_COLOR,
                }}
                className={`relative w-[18px] h-[18px] block rounded-[2px] ${highlight ? '' : 'border'}`}
              />
            </span>
            <span className="text-sm ml-1 font-light">
              {highlight ? 'No Fill' : 'Default'}
            </span>
          </div>

          <div className="px-1">
            {chunkedColors.map((colors, index) => (
              <div
                key={index}
                className="flex p-0 gap-0.5 w-full h-auto relative last:pb-2"
              >
                {colors.map((color, idx) => (
                  <span
                    key={idx}
                    className="w-6 h-6 p-0.5 inline-block rounded-sm border flex-[0 0 auto] cursor-pointer hover:border-border hover:shadow-sm"
                    onClick={() => handleSetColor(color)}
                  >
                    <span
                      style={{ backgroundColor: color }}
                      className="relative w-[18px] h-[18px] block rounded-[2px]"
                    >
                      {color === modelValue && (
                        <svg
                          className="absolute top-[-1px] left-[1px] w-3 h-3"
                          viewBox="0 0 18 18"
                          style={{
                            fill: 'rgba(255, 255, 255)',
                            display: 'block',
                          }}
                        >
                          <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                        </svg>
                      )}
                    </span>
                  </span>
                ))}
              </div>
            ))}

            {recentColors.length > 0 && (
              <>
                <div className="text-sm my-1 font-light">Recently Used</div>
                <div className="flex p-0 w-full h-auto relative last:pb-2">
                  {recentColors.map((color, index) => (
                    <span
                      key={index}
                      className="w-6 h-6 p-0.5 inline-block rounded-sm border flex-[0 0 auto] cursor-pointer hover:border-border hover:shadow-sm"
                      onClick={() => handleSetColor(color)}
                    >
                      <span
                        style={{ backgroundColor: color }}
                        className="relative w-[18px] h-[18px] block rounded-[2px]"
                      />
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="relative">
            <div
              className="text-sm hover:cursor-pointer hover:bg-accent py-1.5 pl-1 font-light"
              onClick={() => html5Color.current?.click()}
            >
              Custom
            </div>
            <input
              ref={html5Color}
              type="color"
              className="invisible absolute left-0 top-4"
              defaultValue={modelValue}
              onChange={(e) => handleSetColor(e.target.value)}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
