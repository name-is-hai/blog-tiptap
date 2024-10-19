import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { CommandTool, MenuListProps } from '../extensions/SlashCommand/types';

export const SlashMenu = React.forwardRef((props: MenuListProps, ref) => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const activeItem = useRef<HTMLButtonElement>(null);
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);
  const [selectedCommandIndex, setSelectedCommandIndex] = useState(0);

  // Anytime the groups change, i.e. the user types to narrow it down, we want to
  // reset the current selection to the first menu item
  useEffect(() => {
    setSelectedGroupIndex(0);
    setSelectedCommandIndex(0);
  }, [props.items]);

  const selectItem = useCallback(
    (groupIndex: number, commandIndex: number) => {
      const command = props.items[groupIndex].commands[commandIndex];
      props.command(command);
    },
    [props]
  );
  React.useImperativeHandle(ref, () => ({
    onKeyDown: ({ event }: { event: React.KeyboardEvent }) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        if (!props.items.length) {
          return false;
        }

        const totalGroups = props.items.length;
        let newCommandIndex = selectedCommandIndex;
        let newGroupIndex = selectedGroupIndex;

        if (event.key === 'ArrowDown') {
          newCommandIndex = selectedCommandIndex + 1;
          if (
            newCommandIndex >= props.items[selectedGroupIndex].commands.length
          ) {
            newCommandIndex = 0;
            newGroupIndex = (selectedGroupIndex + 1) % totalGroups;
          }
        } else if (event.key === 'ArrowUp') {
          newCommandIndex = selectedCommandIndex - 1;
          if (newCommandIndex < 0) {
            newGroupIndex =
              (selectedGroupIndex - 1 + totalGroups) % totalGroups;
            newCommandIndex = props.items[newGroupIndex].commands.length - 1;
          }
        }

        setSelectedCommandIndex(newCommandIndex);
        setSelectedGroupIndex(newGroupIndex);
        return true;
      }

      if (event.key === 'Enter') {
        if (
          props.items.length &&
          selectedGroupIndex >= 0 &&
          selectedCommandIndex >= 0
        ) {
          selectItem(selectedGroupIndex, selectedCommandIndex);

          return true;
        }
        return false;
      }

      return false;
    },
  }));

  useEffect(() => {
    if (activeItem.current && scrollContainer.current) {
      const offsetTop = activeItem.current.offsetTop;
      const offsetHeight = activeItem.current.offsetHeight;

      scrollContainer.current.scrollTop = offsetTop - offsetHeight;
    }
  }, [selectedCommandIndex, selectedGroupIndex]);

  const createCommandClickHandler = useCallback(
    (groupIndex: number, commandIndex: number) => {
      return () => {
        selectItem(groupIndex, commandIndex);
      };
    },
    [selectItem]
  );

  if (!props.items.length) {
    return null;
  }

  return (
    <div
      ref={scrollContainer}
      className="text-black max-h-[min(80vh,24rem)] overflow-auto flex-wrap mb-8 p-2 rounded-md bg-popover text-popover-foreground border shadow-md"
      style={{
        position: 'relative',
        scrollbarWidth: 'thin',
        scrollbarColor: 'rgba(156, 163, 175, 0.6) transparent',
      }}
    >
      <style>
        {`
        div::-webkit-scrollbar {
          width: 8px;
        }

        div::-webkit-scrollbar-track {
          background: transparent;
        }

        div::-webkit-scrollbar-thumb {
          background-color: rgba(156, 163, 175, 0.6);
          border-radius: 9999px;
          border: 2px solid transparent;
          transition: background-color 0.2s ease;
        }

        div::-webkit-scrollbar-thumb:hover {
          background-color: rgba(107, 114, 128, 0.8);
        }
    `}
      </style>
      <div className="grid grid-cols-1 gap-0.5">
        {props.items.map((group, groupIndex: number) => (
          <React.Fragment key={`${group.title}-wrapper`}>
            <div
              className="text-neutral-500 text-[0.65rem] col-[1/-1] mx-2 mt-4 font-semibold tracking-wider select-none uppercase first:mt-0.5"
              key={`${group.title}`}
            >
              {group.title}
            </div>
            {group.commands.map(
              (command: CommandTool, commandIndex: number) => (
                <Button
                  key={`${command.label}`}
                  ref={
                    selectedGroupIndex === groupIndex &&
                    selectedCommandIndex === commandIndex
                      ? activeItem
                      : null
                  }
                  variant={
                    selectedGroupIndex === groupIndex &&
                    selectedCommandIndex === commandIndex
                      ? 'secondary'
                      : 'ghost'
                  }
                  onClick={createCommandClickHandler(groupIndex, commandIndex)}
                  className="flex flex-row items-center justify-start gap-2 px-2 py-1.5 text-sm"
                >
                  {command.icon && <command.icon className="mr-2 h-4 w-4" />}
                  <span>{command.label}</span>
                </Button>
              )
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
});

SlashMenu.displayName = 'SlashMenu';

export default SlashMenu;
