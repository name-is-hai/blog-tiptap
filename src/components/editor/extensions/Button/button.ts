import { mergeAttributes, Node } from '@tiptap/core';
import { NodeViewProps, ReactNodeViewRenderer } from '@tiptap/react';
import { ButtonComponent } from './ButtonComponents';

export const allowedButtonVariant = ['filled', 'outline'] as const;
export type AllowedButtonVariant = (typeof allowedButtonVariant)[number];

export const allowedButtonBorderRadius = ['sharp', 'smooth', 'round'] as const;
export type AllowedButtonBorderRadius =
  (typeof allowedButtonBorderRadius)[number];

export const allowedLogoAlignment = ['left', 'center', 'right'] as const;
export type AllowedLogoAlignment = (typeof allowedLogoAlignment)[number];

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    button: {
      setButton: () => ReturnType;
    };
  }
}

export const ButtonExtension = Node.create({
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
    } = node.attrs;

    const buttonStyle = `
    background-color: ${variant === 'filled' ? buttonColor : 'transparent'};
    color: ${textColor};
    border-width: 2px;
    border-style: solid;
    border-color: ${buttonColor};
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 0.875rem;
    ${_radius === 'round' ? 'border-radius: 9999px;' : ''}
    ${_radius === 'smooth' ? 'border-radius: 0.375rem;' : ''}
    ${_radius === 'sharp' ? 'border-radius: 0;' : ''}
  `;

    const divStyle = `
    text-align: ${alignment};
    width: 100%;
  `;

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
