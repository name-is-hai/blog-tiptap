import { DEFAULT_BUTTON_SIZE_VALUE, SIZE_STYLES } from '@/lib/constants';
import { Node, mergeAttributes } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';
import { ButtonComponent } from '../components/ButtonComponents';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    button: {
      setButton: () => ReturnType;
    };
  }
}

const ButtonExtension = Node.create({
  name: 'button',
  group: 'block',
  atom: true,
  draggable: true,

  addAttributes() {
    return {
      buttonComponent: {
        default: 'button',
      },
      text: {
        default: 'Button',
      },
      href: {
        default: '',
      },
      alignment: {
        default: 'left',
      },
      variant: {
        default: 'filled',
      },
      borderRadius: {
        default: 'smooth',
      },
      buttonColor: {
        default: 'rgb(0, 0, 0)',
      },
      textColor: {
        default: 'rgb(255, 255, 255)',
      },
      size: {
        default: DEFAULT_BUTTON_SIZE_VALUE,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: `a[data-button-component="${this.name}"]`,
      },
    ];
  },

  renderHTML({ HTMLAttributes, node }) {
    const {
      text,
      variant,
      borderRadius: _radius,
      buttonColor,
      textColor,
      alignment,
      size,
    } = node.attrs;
    const { padding, fontSize } =
      SIZE_STYLES[size as keyof typeof SIZE_STYLES] || SIZE_STYLES['md'];

    const buttonStyle = `background-color: ${variant === 'filled' ? buttonColor : 'transparent'}; color: ${textColor}; border-width: 2px; border-style: solid; border-color: ${buttonColor}; padding: ${padding}; font-size: ${fontSize}; font-weight: 600; display: inline-flex; justify-content: center; align-items: center; ${_radius === 'round' ? 'border-radius: 9999px;' : ''} ${_radius === 'smooth' ? 'border-radius: 0.375rem;' : ''} ${_radius === 'sharp' ? 'border-radius: 0;' : ''}`;
    const divStyle = `text-align: ${alignment};width: 100%;`;

    return [
      'div',
      {
        style: divStyle,
      },
      [
        'a',
        mergeAttributes(
          {
            'data-button-component': this.name,
            style: buttonStyle,
          },
          HTMLAttributes
        ),
        text,
      ],
    ];
  },
  addCommands() {
    return {
      setButton:
        () =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: {
              buttonComponent: this.name,
            },
          });
        },
    };
  },

  addNodeView() {
    return ReactNodeViewRenderer(ButtonComponent);
  },
});

export default ButtonExtension;
