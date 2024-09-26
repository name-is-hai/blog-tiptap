import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { COLORS_LIST, DEFAULT_COLOR } from '@/lib/constants';
import React, { useEffect, useMemo, useState } from 'react';

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
  onModelValueChange,
  children,
}: Props) => {
  const [html5Color, setHtml5Color] = useState<HTMLInputElement | null>(null);
  const [recentColors, setRecentColors] = useState<string[]>([]);

  // Local storage key for recent colors
  const localStorageKey = highlight ? 'recentColorsHighlight' : 'recentColors';

  // Fetch recent colors from localStorage
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
    const chunks: string[][] = [];
    COLORS_LIST.forEach((color, index) => {
      const chunkIndex = Math.floor(index / 10);
      if (!chunks[chunkIndex]) chunks[chunkIndex] = [];
      chunks[chunkIndex].push(color);
    });
    return chunks;
  }, []);

  const updateRecentColors = (color: string) => {
    const index = recentColors.indexOf(color);
    if (index !== -1) {
      recentColors.splice(index, 1);
    }
    setRecentColors([color, ...recentColors.slice(0, 9)]); // Limit to 10 colors
  };

  const handleSetColor = (color: string | undefined) => {
    if (color === undefined) {
      onModelValueChange?.(color);
      onChange?.(color);
      return;
    }

    const isCorrectColor = /^#([0-9A-F]{3}){1,2}$/i.test(color);
    if (isCorrectColor) {
      onModelValueChange?.(color);
      onChange?.(color);
      updateRecentColors(color);
    }
  };

  const handleHtml5ColorClick = () => {
    if (html5Color) html5Color.click();
  };

  return (
    <Popover>
      <PopoverTrigger disabled={disabled}>{children}</PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col">
          {highlight ? (
            <div
              className="flex items-center p-1 cursor-pointer hover:bg-accent"
              onClick={() => handleSetColor(undefined)}
            >
              <span className="w-6 h-6 p-0.5 inline-block rounded-sm border relative after:border-b-2 after:border-b-red-500 after:top-[10px] after:h-0 after:left-0 after:w-6 after:absolute after:block after:rotate-[45deg]">
                <svg
                  viewBox="0 0 18 18"
                  style={{ fill: 'rgba(0, 0, 0, 0.4)', display: 'none' }}
                >
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                </svg>
              </span>
              <span className="text-sm ml-1 font-light">No Fill</span>
            </div>
          ) : (
            <div
              className="flex items-center p-1 cursor-pointer hover:bg-accent"
              onClick={() => handleSetColor(undefined)}
            >
              <span className="w-6 h-6 p-0.5 inline-block rounded-sm border">
                <span
                  style={{ backgroundColor: DEFAULT_COLOR }}
                  className="relative w-[18px] h-[18px] block rounded-[2px]"
                >
                  <svg
                    viewBox="0 0 18 18"
                    style={{ fill: 'rgba(255, 255, 255)', display: 'none' }}
                  >
                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                  </svg>
                </span>
              </span>
              <span className="text-sm ml-1 font-light">Default</span>
            </div>
          )}

          <div className="px-1">
            {chunkedColors.map((colors, index) => (
              <div
                key={index}
                className="flex p-0 w-full h-auto relative last:pb-2"
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
                      {color !== modelValue ? (
                        <svg
                          viewBox="0 0 18 18"
                          style={{
                            fill: 'rgba(255, 255, 255)',
                            display: 'none',
                          }}
                        >
                          <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                        </svg>
                      ) : (
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
                      >
                        <svg
                          viewBox="0 0 18 18"
                          style={{
                            fill: 'rgba(255, 255, 255)',
                            display: 'none',
                          }}
                        >
                          <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                        </svg>
                      </span>
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="relative">
            <div
              className="text-sm hover:cursor-pointer hover:bg-accent py-1.5 pl-1 font-light"
              onClick={handleHtml5ColorClick}
            >
              More Colors...
            </div>
            <input
              type="color"
              ref={(input) => setHtml5Color(input)}
              onChange={(e) => handleSetColor(e.target.value)}
              className="absolute left-0 top-4"
              style={{ visibility: 'hidden' }}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
