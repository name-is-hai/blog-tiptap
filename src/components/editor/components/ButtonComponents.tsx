import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  ALLOWED_BUTTON_BORDER_RADIUS,
  ALLOWED_BUTTON_VARIANT,
  SIZE_STYLES,
} from '@/lib/constants';
import { cn } from '@/lib/utils';
import { NodeViewProps, NodeViewWrapper } from '@tiptap/react';
import {
  AlignHorizontalDistributeEnd,
  AlignHorizontalDistributeStart,
  AlignHorizontalSpaceAround,
} from 'lucide-react';
import { ColorHighlightComponent } from '../menus/components/ColorHighlight';
import { TextHighlight } from '../menus/components/TextHighlight';
import { ButtonSizePicker } from './ButtonSizePicker';
const alignments = {
  left: AlignHorizontalDistributeStart,
  center: AlignHorizontalSpaceAround,
  right: AlignHorizontalDistributeEnd,
};
const items = {
  style(props: NodeViewProps) {
    return ALLOWED_BUTTON_VARIANT.map((variant) => ({
      name: variant,
      isActive: props.node.attrs.variant === variant,
      onClick: () => {
        props.updateAttributes({
          variant: variant,
        });
      },
    }));
  },
  cornerRadius(props: NodeViewProps) {
    return ALLOWED_BUTTON_BORDER_RADIUS.map((radius) => ({
      name: radius,
      isActive: props.node.attrs.borderRadius === radius,
      onClick: () => {
        props.updateAttributes({
          borderRadius: radius,
        });
      },
    }));
  },
  alignment(props: NodeViewProps) {
    return Object.entries(alignments).map(([alignment, Icon]) => ({
      name: alignment,
      icon: Icon,
      isActive: props.node.attrs.alignment === alignment,
      onClick: () => props.updateAttributes({ alignment }),
    }));
  },
};

export function ButtonComponent(props: NodeViewProps) {
  const {
    href,
    text,
    alignment,
    variant,
    borderRadius: _radius,
    buttonColor,
    textColor,
    size,
  } = props.node.attrs;
  const { getPos, editor } = props;

  return (
    <NodeViewWrapper
      className={`react-component ${
        props.selected ? 'ProseMirror-selectednode' : ''
      } w-full`}
      draggable="true"
      data-drag-handle=""
      style={{
        textAlign: alignment,
      }}
    >
      <Popover open={props.selected}>
        <PopoverTrigger asChild>
          <div className="inline-block">
            <button
              className={cn(
                'inline-flex items-center justify-center text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50',
                'px-6 py-3 font-semibold no-underline',
                {
                  'rounded-full': _radius === 'round',
                  'rounded-md': _radius === 'smooth',
                  'rounded-none': _radius === 'sharp',
                }
              )}
              tabIndex={-1}
              style={{
                ...(SIZE_STYLES[size as keyof typeof SIZE_STYLES] || {}),
                backgroundColor:
                  variant === 'filled' ? buttonColor : 'transparent',
                color: textColor,
                borderWidth: 2,
                borderStyle: 'solid',
                borderColor: buttonColor,
              }}
              onClick={(e) => {
                e.preventDefault();
                const pos = getPos();
                editor.commands.setNodeSelection(pos);
              }}
            >
              {text}
            </button>
          </div>
        </PopoverTrigger>
        <PopoverContent
          align="center"
          className="w-fit space-y-4 p-4"
          onOpenAutoFocus={(e) => e.preventDefault()}
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          <Input
            placeholder="Add text here"
            value={text}
            onChange={(e) => {
              props.updateAttributes({
                text: e.target.value,
              });
            }}
            className="w-full"
          />
          <Input
            placeholder="Add link here"
            value={href}
            onChange={(e) => {
              props.updateAttributes({
                href: e.target.value,
              });
            }}
            className="w-full"
          />

          <div className="space-y-2">
            <p className="text-xs font-medium text-gray-500">Style</p>
            <div className="flex gap-2">
              {items.style(props).map((item, index) => (
                <Button
                  key={index}
                  variant={item.isActive ? 'secondary' : 'ghost'}
                  className="flex-1 font-normal capitalize"
                  size="sm"
                  onClick={item.onClick}
                  type="button"
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-medium text-gray-500">Corner Radius</p>
            <div className="flex gap-2">
              {items.cornerRadius(props).map((item, index) => (
                <Button
                  key={index}
                  variant={item.isActive ? 'secondary' : 'ghost'}
                  className="flex-1 font-normal capitalize"
                  size="sm"
                  onClick={item.onClick}
                  type="button"
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <p className="text-xs font-medium text-gray-500 mb-2">
                Alignment
              </p>
              <div className="flex gap-2">
                {items.alignment(props).map((item, index) => (
                  <Button
                    key={index}
                    variant={item.isActive ? 'secondary' : 'ghost'}
                    className="flex-1"
                    size="sm"
                    onClick={item.onClick}
                    type="button"
                  >
                    <item.icon size={16} />
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium text-gray-500 mb-2">Color</p>
              <div className="flex gap-2">
                <ColorHighlightComponent
                  action={(color) => {
                    props.updateAttributes({
                      buttonColor: color,
                    });
                  }}
                />
                <TextHighlight
                  action={(color) => {
                    props.updateAttributes({
                      textColor: color,
                    });
                  }}
                />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium text-gray-500 mb-2">Size</p>
              <div className="flex gap-2">
                <ButtonSizePicker
                  onChange={(value) => {
                    props.updateAttributes({
                      size: value,
                    });
                  }}
                  value={size}
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </NodeViewWrapper>
  );
}
