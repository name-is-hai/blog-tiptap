export const initialContent = {
  type: 'doc',
  content: [
    {
      type: 'heading',
      attrs: {
        id: '1075680b-716b-4d0b-9665-7a6b55ee7342',
        textAlign: 'left',
        level: 1,
      },
      content: [
        {
          type: 'emoji',
          attrs: {
            name: 'fire',
          },
        },
        {
          type: 'text',
          text: ' Next.js + Tiptap Block Editor Template',
        },
      ],
    },
    {
      type: 'paragraph',
      attrs: {
        id: 'cb9ae2ce-d60c-40d1-80d3-c0cfa0c457af',
        class: null,
        textAlign: 'left',
      },
      content: [
        {
          type: 'text',
          text: 'Welcome to our React Block Editor Template built on top of ',
        },
        {
          type: 'text',
          marks: [
            {
              type: 'link',
              attrs: {
                href: 'https://tiptap.dev/',
                target: '',
                rel: 'noopener noreferrer nofollow',
                class: null,
              },
            },
          ],
          text: 'Tiptap',
        },
        {
          type: 'text',
          text: ', ',
        },
        {
          type: 'text',
          marks: [
            {
              type: 'link',
              attrs: {
                href: 'https://nextjs.org/',
                target: '_blank',
                rel: 'noopener noreferrer nofollow',
                class: null,
              },
            },
          ],
          text: 'Next.js',
        },
        {
          type: 'text',
          text: ' and ',
        },
        {
          type: 'text',
          marks: [
            {
              type: 'link',
              attrs: {
                href: 'https://tailwindcss.com/',
                target: '_blank',
                rel: 'noopener noreferrer nofollow',
                class: null,
              },
            },
          ],
          text: 'Tailwind',
        },
        {
          type: 'text',
          text: '. This project can be a good starting point for your own implementation of a block editor.',
        },
      ],
    },
    {
      type: 'codeBlock',
      attrs: {
        id: '86b5a0f4-9918-40fd-a4cd-7b50814676ff',
        language: null,
      },
      content: [
        {
          type: 'text',
          text: "import { useEditor, EditorContent } from '@tiptap/react'\n\nfunction App() {\n  const editor = useEditor()\n\n  return <EditorContent editor={editor} />\n}",
        },
      ],
    },
    {
      type: 'paragraph',
      attrs: {
        id: '2ffc09be-48e9-43e9-b2da-b5d30f25d37b',
        class: null,
        textAlign: 'left',
      },
      content: [
        {
          type: 'text',
          text: 'This editor includes features like:',
        },
      ],
    },
    {
      type: 'bulletList',
      content: [
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: 'f05e7e28-7933-41a1-8752-8d7dce7707cb',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: 'A DragHandle including a DragHandle menu',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: '43416612-8e82-4b60-86c8-ee7fff231ec3',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: 'A Slash menu that can be triggered via typing a ',
                },
                {
                  type: 'text',
                  marks: [
                    {
                      type: 'code',
                    },
                  ],
                  text: '/',
                },
                {
                  type: 'text',
                  text: ' into an empty paragraph or by using the ',
                },
                {
                  type: 'text',
                  marks: [
                    {
                      type: 'bold',
                    },
                  ],
                  text: '+ Button',
                },
                {
                  type: 'text',
                  text: ' next to the drag handle',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: 'f053cbf1-08e7-410d-bff2-7139401e4e9a',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: 'A TextFormatting menu that allows you to change the ',
                },
                {
                  type: 'text',
                  marks: [
                    {
                      type: 'textStyle',
                      attrs: {
                        color: null,
                        fontSize: '18px',
                      },
                    },
                  ],
                  text: 'font size',
                },
                {
                  type: 'text',
                  text: ', ',
                },
                {
                  type: 'text',
                  marks: [
                    {
                      type: 'bold',
                    },
                  ],
                  text: 'font weight',
                },
                {
                  type: 'text',
                  text: ', ',
                },
                {
                  type: 'text',
                  marks: [
                    {
                      type: 'textStyle',
                      attrs: {
                        color: null,
                        fontSize: null,
                      },
                    },
                  ],
                  text: 'font family',
                },
                {
                  type: 'text',
                  text: ', ',
                },
                {
                  type: 'text',
                  marks: [
                    {
                      type: 'textStyle',
                      attrs: {
                        color: '#b91c1c',
                        fontSize: null,
                      },
                    },
                  ],
                  text: 'color',
                },
                {
                  type: 'text',
                  text: ', ',
                },
                {
                  type: 'text',
                  marks: [
                    {
                      type: 'highlight',
                      attrs: {
                        color: '#7e7922',
                      },
                    },
                  ],
                  text: 'highlight',
                },
                {
                  type: 'text',
                  text: ' and more',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: '597a30f0-6f0f-4d09-ba8a-bb03358ce224',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: 'A Table of Contents that can be viewed via clicking on the button on the top left corner',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: '7c73be9b-290e-4501-a314-21cdd74d2251',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: 'Live collaboration including content synchronization and collaborative cursors',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: '21d3e074-cc4c-4fc8-96df-2d5b1a48ce2b',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: 'AI implementation with text and image generation and auto completion via the ',
                },
                {
                  type: 'text',
                  marks: [
                    {
                      type: 'code',
                    },
                  ],
                  text: 'TAB',
                },
                {
                  type: 'text',
                  text: ' key.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'imageBlock',
      attrs: {
        src: '/placeholder-image.jpg',
        width: '80%',
        align: 'center',
      },
    },
    {
      type: 'heading',
      attrs: {
        id: '778ab56f-95a2-4c61-b2e4-925ce27c1d34',
        textAlign: 'left',
        level: 2,
      },
      content: [
        {
          type: 'text',
          text: 'Get started',
        },
      ],
    },
    {
      type: 'paragraph',
      attrs: {
        id: 'd81a29ab-28c4-4ac1-b9bd-28a709ef465c',
        class: null,
        textAlign: 'left',
      },
      content: [
        {
          type: 'text',
          text: 'To access our block editor template, simply head over to your ',
        },
        {
          type: 'text',
          marks: [
            {
              type: 'link',
              attrs: {
                href: 'https://cloud.tiptap.dev/react-templates',
                target: '_blank',
                rel: 'noopener noreferrer nofollow',
                class: null,
              },
            },
          ],
          text: 'Tiptap Account',
        },
        {
          type: 'text',
          text: ' If you are not already a member, sign up for an account and complete the 2-minute React Template survey. Once finished, we will send you an invite to the private GitHub repository.',
        },
      ],
    },
    {
      type: 'heading',
      attrs: {
        id: '890cea2a-7426-45b4-a167-a2026b0b4e78',
        textAlign: 'left',
        level: 2,
      },
      content: [
        {
          type: 'text',
          text: 'Installed extensions',
        },
      ],
    },
    {
      type: 'bulletList',
      content: [
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: '63ab53f9-308d-4cef-942b-af11ef3aded1',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap-pro/extension-ai',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: 'e9dae2e1-e325-4e96-b0c4-e25ac505547f',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap-pro/extension-details',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: 'd2af4844-b43b-456d-9842-dbbe4eb96db1',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap-pro/extension-details-content',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: '8d2a3ee3-e5ec-4a64-90f6-7dd518ea7922',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap-pro/extension-details-summary',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: '686f733b-9487-4fed-989a-9ab050c17493',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap-pro/extension-drag-handle',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: '313dda77-0a0c-49ab-975a-7bb84a74772b',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap-pro/extension-drag-handle-react',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: '98faca3d-da8e-4e00-9455-9c9b80c7290a',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap-pro/extension-emoji',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: '2130d8f9-73e1-4257-90b6-d73aef6c97dc',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap-pro/extension-file-handler',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: '0cfd4a26-752b-41c0-b34b-e0c9afe91f3f',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap-pro/extension-mathematics',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: 'fff83db7-93cf-4874-a245-2b8594c74416',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap-pro/extension-node-range',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: 'f685a071-0ef6-4dd5-a17e-d2893ba6560e',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap-pro/extension-table-of-contents',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: '4508731f-7520-4b38-8fad-4f743a0a95de',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap-pro/extension-unique-id',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: '2612f0a0-b890-46e7-b765-d0bf7668f13c',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap/extension-bullet-list',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: 'c75f5e1d-ef91-4a43-9575-555449e0fcd1',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap/extension-character-count',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: 'a093a681-2dc3-4a5d-992b-fe32e67416c1',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap/extension-code-block',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: '3b2634d8-810d-428d-a262-ccc078cee9b1',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap/extension-code-block-lowlight',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: 'abda71c5-2fcd-447a-90ab-8146395ec19c',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap/extension-collaboration',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: '9fccf093-fe3a-46ab-bbea-1761f7923141',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap/extension-collaboration-cursor',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: '00c5dc24-313a-4bf8-86c2-a7b50e6b7994',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap/extension-color',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: 'd071bdec-9745-41ca-afcb-2efacfcf9790',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap/extension-document',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: '9462b5d4-d7a2-461f-8341-a52408b10979',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap/extension-dropcursor',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: '5c5dc3b2-ad94-420a-a091-c185d5010411',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap/extension-focus',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: 'a67af788-95c3-4bf0-9ac9-5051a561f070',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap/extension-font-family',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: '7a9de9e2-b61e-4c38-bed7-68b1bc36aecb',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap/extension-heading',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: '66cdb7ac-1adc-461c-985b-72b3b46aa8ff',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap/extension-highlight',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: '075e4588-9598-4124-99c4-5f45d32d3bc2',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap/extension-horizontal-rule',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: 'bc380294-5354-4e2a-b095-a79d84a95148',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap/extension-image',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: 'c08cc473-ec65-4d5d-b444-d4ea99e5f932',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap/extension-link',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: 'c41aa8d3-69c5-468c-966c-e1a1dd1931db',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap/extension-ordered-list',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: 'd4561c33-3b22-4135-9578-21c3c3e795e8',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap/extension-paragraph',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: 'cc1eba3e-fd6c-4810-b665-7e30dac34320',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap/extension-placeholder',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: '54d9361d-52f1-45ee-a371-170b3cb71b08',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap/extension-subscript',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: '944befdd-7457-416f-ab6d-7be08bede793',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap/extension-superscript',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: '4f42230b-57ed-47ae-960d-44ab10f9e932',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap/extension-table',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: '6ebd7dca-65e3-4c05-89c1-e0f2139ac2b6',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap/extension-table-header',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: 'e20329e6-49e4-4e4d-9445-b667a31ea0a3',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap/extension-table-row',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: '34cccfc7-910a-4df5-bd31-5a9169073672',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap/extension-task-item',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: 'e453bc53-e475-4ff9-ad53-449d3f5d7a3c',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap/extension-task-list',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: '37520560-6eab-4807-9ef3-434f3b2c437b',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap/extension-text-align',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: 'd089b9c6-b4a0-47ba-b855-dc6ac5c2d2d0',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap/extension-text-style',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: 'b208ce18-7487-47ba-9572-a96ba9f21ebc',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap/extension-typography',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                id: '4b37eca6-be62-44e2-96f5-ea7b16cf211d',
                class: null,
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: '@tiptap/extension-underline',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'table',
      attrs: {
        id: 'bb20b542-114b-4699-9650-85d3425b8a6d',
      },
      content: [
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: {
                backgroundColor: '',
                colspan: 1,
                rowspan: 1,
                colwidth: null,
              },
              content: [
                {
                  type: 'paragraph',
                  attrs: {
                    id: '306fe92d-ca08-468f-b8e8-7d8b9d12595b',
                    class: null,
                    textAlign: 'left',
                  },
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                backgroundColor: '',
                colspan: 1,
                rowspan: 1,
                colwidth: null,
              },
              content: [
                {
                  type: 'paragraph',
                  attrs: {
                    id: '7b0488ac-5181-4668-978a-9e8e2accf875',
                    class: null,
                    textAlign: 'left',
                  },
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                backgroundColor: '',
                colspan: 1,
                rowspan: 1,
                colwidth: null,
              },
              content: [
                {
                  type: 'paragraph',
                  attrs: {
                    id: '1d7d9b88-ed80-4ed7-a9a8-e9eb9e0bda25',
                    class: null,
                    textAlign: 'left',
                  },
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: {
                backgroundColor: '',
                colspan: 1,
                rowspan: 1,
                colwidth: null,
              },
              content: [
                {
                  type: 'paragraph',
                  attrs: {
                    id: '088c625b-ff84-4a36-ba8e-d90d363f9acb',
                    class: null,
                    textAlign: 'left',
                  },
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                backgroundColor: '',
                colspan: 1,
                rowspan: 1,
                colwidth: null,
              },
              content: [
                {
                  type: 'paragraph',
                  attrs: {
                    id: '411c0081-7d1b-4971-8dd0-3dd77788802f',
                    class: null,
                    textAlign: 'left',
                  },
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                backgroundColor: '',
                colspan: 1,
                rowspan: 1,
                colwidth: null,
              },
              content: [
                {
                  type: 'paragraph',
                  attrs: {
                    id: '40a89d20-f6e6-4759-aa17-924a9fcea8a9',
                    class: null,
                    textAlign: 'left',
                  },
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: {
                backgroundColor: '',
                colspan: 1,
                rowspan: 1,
                colwidth: null,
              },
              content: [
                {
                  type: 'paragraph',
                  attrs: {
                    id: '3b801fb7-dbd7-4039-89df-0d3f27382f9d',
                    class: null,
                    textAlign: 'left',
                  },
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                backgroundColor: '',
                colspan: 1,
                rowspan: 1,
                colwidth: null,
              },
              content: [
                {
                  type: 'paragraph',
                  attrs: {
                    id: '7490554d-b5d5-4b05-825f-cd0e59f05e1e',
                    class: null,
                    textAlign: 'left',
                  },
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                backgroundColor: '',
                colspan: 1,
                rowspan: 1,
                colwidth: null,
              },
              content: [
                {
                  type: 'paragraph',
                  attrs: {
                    id: 'daa58a95-d177-42e9-a2cd-f91cf62e9ae0',
                    class: null,
                    textAlign: 'left',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      attrs: {
        id: '2bc87b9a-2a35-4039-86d1-df7ce19e337d',
        class: null,
        textAlign: 'left',
      },
    },
  ],
};
