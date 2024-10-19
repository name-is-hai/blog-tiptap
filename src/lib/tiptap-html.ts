export const tiptapHtml = (content: string) =>
  `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="vi">
  <head>
    <meta
      content="width=device-width" name="viewport"/>
    <meta
      content="text/html; charset=UTF-8" http-equiv="Content-Type"
    />
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta content="telephone=no,address=no,email=no,date=no,url=no" name="format-detection" />
    <meta
      content="light" name="color-scheme" />
    <meta content="light" name="supported-color-schemes" />
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
    </style>
    <style>
      * {
        font-family: 'Inter', sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
      }
    </style>
    <style>
      .ProseMirror {
        position: relative;
      }

      .ProseMirror a {
        text-decoration: none;
      }

      .ProseMirror {
        word-wrap: break-word;
        white-space: pre-wrap;
        white-space: break-spaces;
        -webkit-font-variant-ligatures: none;
        font-variant-ligatures: none;
        font-feature-settings: 'liga' 0; /* the above doesn't seem to work in Edge */
      }

      .ProseMirror {
        caret-color: #000;
        outline-width: 0px;
        padding-right: 2rem;
        padding-left: 5rem;
        padding-top: 4rem;
        padding-bottom: 4rem;
        margin-left: auto;
        margin-right: auto;
        z-index: 0;
        max-width: 42rem;
      }

      .ProseMirror .selection {
        display: inline-block;
      }

      .ProseMirror .selection,
      .ProseMirror *::selection {
        background-color: rgba(0, 0, 0, 0.1);
        display: inline-block;
      }

      .ProseMirror > .react-renderer {
        margin-top: 3rem;
        margin-bottom: 3rem;
      }

      .ProseMirror > .react-renderer:first-child {
        margin-top: 0;
      }

      .ProseMirror > .react-renderer:last-child {
        margin-bottom: 0;
      }

      .ProseMirror.resize-cursor {
        cursor: col-resize;
      }

      .ProseMirror .ProseMirror-gapcursor {
        position: relative;
        width: 100%;
        max-width: 50rem;
        margin-left: auto;
        margin-right: auto;
      }

      .ProseMirror .ProseMirror-gapcursor:after {
        border-top-color: rgba(0, 0, 0, 0.4);
        width: 100%;
        top: -1.5em;
        max-width: 42rem;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
      }

      .ProseMirror [data-theme='slash-command'] {
        width: 1000vw;
      }

      @media (min-width: 1024px) {
        .ProseMirror {
          padding-left: 8px;
          padding-right: 8px;
        }
      }

      .dark .ProseMirror {
        caret-color: white;
      }

      .dark .ProseMirror .selection,
      .dark .ProseMirror *::selection {
        background-color: rgba(255, 255, 255, 0.2);
      }

      .dark .ProseMirror .ProseMirror-gapcursor:after {
        border-top-color: rgba(255, 255, 255, 0.4);
      }

      .ProseMirror p {
        line-height: 1.625;
        margin-top: 0.75rem;
        margin-bottom: 0.75rem;
      }

      .ProseMirror p:first-child {
        margin-top: 0;
      }

      .ProseMirror p:last-child {
        margin-bottom: 0;
      }

      .ProseMirror > p {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
      }

      .ProseMirror > p:first-child {
        margin-top: 0;
      }

      .ProseMirror > p:last-child {
        margin-bottom: 0;
      }

      .ProseMirror h1 {
        font-size: 1.875rem;
        line-height: 2.25rem;
      }

      .ProseMirror h2 {
        font-size: 1.5rem;
        line-height: 2rem;
      }

      .ProseMirror h3 {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }

      .ProseMirror h4 {
        font-size: 1.125rem;
        line-height: 1.75rem;
      }

      .ProseMirror h5 {
        font-size: 1rem;
        line-height: 1.5rem;
      }

      .ProseMirror h6 {
        font-size: 0.875rem;
        line-height: 1.25rem;
      }

      .ProseMirror h1,
      .ProseMirror h2,
      .ProseMirror h3,
      .ProseMirror h4,
      .ProseMirror h5,
      .ProseMirror h6 {
        font-weight: 700;
      }

      .ProseMirror h1:first-child,
      .ProseMirror h2:first-child,
      .ProseMirror h3:first-child,
      .ProseMirror h4:first-child,
      .ProseMirror h5:first-child,
      .ProseMirror h6:first-child {
        margin-top: 0;
      }

      .ProseMirror h1:last-child,
      .ProseMirror h2:last-child,
      .ProseMirror h3:last-child,
      .ProseMirror h4:last-child,
      .ProseMirror h5:last-child,
      .ProseMirror h6:last-child {
        margin-bottom: 0;
      }

      .ProseMirror h1,
      .ProseMirror h2,
      .ProseMirror h3 {
        margin-top: 3rem;
      }

      .ProseMirror h4,
      .ProseMirror h5,
      .ProseMirror h6 {
        margin-top: 2rem;
      }

      .ProseMirror a.link {
        color: #3b82f6;
        font-weight: 800;
      }

      .dark .ProseMirror a.link {
        color: #60a5fa;
      }

      .ProseMirror mark {
        background-color: #ef4444;
        border-radius: 0.125rem;
        box-decoration-break: clone;
        color: inherit;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
      }

      .ProseMirror img {
        height: auto;
        width: 100%;
        max-width: 100%;
      }

      .ProseMirror [data-type='horizontalRule'] {
        margin-top: 2rem;
        margin-bottom: 2rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        transition-property: all;
        transition-duration: 100ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
      }

      .ProseMirror [data-type='horizontalRule'].ProseMirror-selectednode {
        background-color: rgba(0, 0, 0, 0.05);
      }

      .ProseMirror [data-type='horizontalRule'].ProseMirror-selectednode hr {
        border-top-color: rgba(0, 0, 0, 0.3);
      }

      .ProseMirror
        [data-type='horizontalRule']:hover:not(.ProseMirror-selectednode) {
        background-color: rgba(0, 0, 0, 0.05);
      }

      .ProseMirror [data-type='horizontalRule'] hr {
        border: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        background-color: rgba(0, 0, 0, 0.8);
      }

      .dark .ProseMirror mark {
        background-color: #f87171;
      }

      .dark .ProseMirror [data-type='horizontalRule'].ProseMirror-selectednode {
        background-color: rgba(255, 255, 255, 0.1);
      }

      .dark
        .ProseMirror
        [data-type='horizontalRule'].ProseMirror-selectednode
        hr {
        border-top-color: rgba(255, 255, 255, 0.3);
      }

      .dark
        .ProseMirror
        [data-type='horizontalRule']:hover:not(.ProseMirror-selectednode) {
        background-color: rgba(255, 255, 255, 0.1);
      }

      .dark .ProseMirror [data-type='horizontalRule'] hr {
        border-top-color: rgba(255, 255, 255, 0.2);
        background-color: rgba(255, 255, 255, 0.8);
      }

      .ProseMirror .tableWrapper {
        margin-top: 3rem;
        margin-bottom: 3rem;
      }

      .ProseMirror table {
        border-collapse: collapse;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 0.25rem;
        box-sizing: border-box;
        width: 100%;
      }

      .ProseMirror table td,
      .ProseMirror table th {
        border: 1px solid rgba(0, 0, 0, 0.1);
        min-width: 100px;
        padding: 0.5rem;
        position: relative;
        text-align: left;
        vertical-align: top;
      }

      .ProseMirror table td:first-of-type:not(a),
      .ProseMirror table th:first-of-type:not(a) {
        margin-top: 0;
      }

      .ProseMirror table td p,
      .ProseMirror table th p {
        margin: 0;
      }

      .ProseMirror table td p + p,
      .ProseMirror table th p + p {
        margin-top: 0.75rem;
      }

      .ProseMirror table th {
        font-weight: bold;
      }

      .ProseMirror table .column-resize-handle {
        bottom: -2px;
        display: flex;
        pointer-events: none;
        position: absolute;
        right: -0.25rem;
        top: 0;
        width: 0.5rem;
      }

      .ProseMirror table .column-resize-handle::before {
        background-color: rgba(0, 0, 0, 0.2);
        content: '';
        height: 100%;
        width: 1px;
        margin-left: 0.5rem;
      }

      .ProseMirror table .selectedCell {
        background-color: rgba(0, 0, 0, 0.05);
        border: 1px double rgba(0, 0, 0, 0.2);
      }

      .dark .ProseMirror table {
        border-color: rgba(255, 255, 255, 0.2);
      }

      .dark .ProseMirror table td,
      .dark .ProseMirror table th {
        border-color: rgba(255, 255, 255, 0.2);
      }

      .dark .ProseMirror table .column-resize-handle::before {
        background-color: rgba(255, 255, 255, 0.2);
      }

      .dark .ProseMirror table .selectedCell {
        background-color: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.2);
      }

      .dark .ProseMirror table .grip-column,
      .dark .ProseMirror table .grip-row {
        background-color: rgba(255, 255, 255, 0.1);
      }

      .dark .ProseMirror table .grip-column {
        border-color: rgba(255, 255, 255, 0.2);
      }

      .dark .ProseMirror table .grip-column:hover,
      .dark .ProseMirror table .grip-column.selected {
        background-color: rgba(255, 255, 255, 0.2);
      }

      .dark .ProseMirror table .grip-column:hover::before {
        border-bottom-color: rgba(255, 255, 255, 0.6);
      }

      .dark .ProseMirror table .grip-column.selected {
        background-color: rgba(255, 255, 255, 0.3);
        border-color: rgba(255, 255, 255, 0.3);
      }

      .dark .ProseMirror table .grip-column.selected::before {
        border-bottom-color: #fff;
      }

      .dark .ProseMirror table .grip-row {
        border-color: rgba(255, 255, 255, 0.2);
      }

      .dark .ProseMirror table .grip-row:hover,
      .dark .ProseMirror table .grip-row.selected {
        background-color: rgba(255, 255, 255, 0.2);
      }

      .dark .ProseMirror table .grip-row:hover::before {
        border-left-color: rgba(255, 255, 255, 0.6);
      }

      .dark .ProseMirror table .grip-row.selected {
        background-color: rgba(255, 255, 255, 0.3);
        border-color: rgba(255, 255, 255, 0.3);
      }

      .dark .ProseMirror table .grip-row.selected::before {
        border-left-color: #fff;
      }

      .ProseMirror ol {
        list-style-type: decimal;
      }

      .ProseMirror ul {
        list-style-type: disc;
      }

      .ProseMirror ul,
      .ProseMirror ol {
        padding: 0 2rem;
        margin: 1.5rem 0;
      }

      .ProseMirror ul:first-child,
      .ProseMirror ol:first-child {
        margin-top: 0;
      }

      .ProseMirror ul:last-child,
      .ProseMirror ol:last-child {
        margin-bottom: 0;
      }

      .ProseMirror ul ul,
      .ProseMirror ul ol,
      .ProseMirror ol ul,
      .ProseMirror ol ol,
      .ProseMirror ul li,
      .ProseMirror ol li {
        margin: 0.25rem 0;
      }

      .ProseMirror ul p,
      .ProseMirror ol p {
        margin-top: 0;
        margin-bottom: 0.25rem;
      }

      .ProseMirror > ul,
      .ProseMirror > ol {
        margin: 2rem 0;
      }

      .ProseMirror > ul:first-child,
      .ProseMirror > ol:first-child {
        margin-top: 0;
      }

      .ProseMirror > ul:last-child,
      .ProseMirror > ol:last-child {
        margin-bottom: 0;
      }

      .ProseMirror ul[data-type='taskList'] {
        list-style-type: none;
        padding: 0;
      }

      .ProseMirror ul[data-type='taskList'] p {
        margin: 0;
      }

      .ProseMirror ul[data-type='taskList'] li {
        display: flex;
      }

      .ProseMirror ul[data-type='taskList'] li > label {
        flex: 0 0 auto;
        margin-top: 0.25rem;
        margin-right: 0.5rem;
        user-select: none;
      }

      .ProseMirror ul[data-type='taskList'] li > div {
        flex: 1 1 auto;
      }

      .ProseMirror ul[data-type='taskList'] li[data-checked='true'] {
        text-decoration: line-through;
      }

      .ProseMirror code {
        color: white;
        background-color: #171717;
        border-radius: 0.125rem;
        box-shadow:
          0 10px 15px -3px rgb(0 0 0 / 0.1),
          0 4px 6px -4px rgb(0 0 0 / 0.1);
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
      }

      .ProseMirror code::selection {
        background-color: rgba(255, 255, 255, 0.3);
      }

      .ProseMirror pre {
        background-color: #404040;
        color: white;
        border-radius: 0.25rem;
        margin-top: 3rem;
        margin-bottom: 3rem;
        padding: 1rem;
        border: 1px solid black;
      }

      .ProseMirror pre *::selection {
        background-color: rgba(255, 255, 255, 0.2);
      }

      .ProseMirror pre code {
        background-color: inherit;
        color: inherit;
        padding: 0;
        box-shadow: none;
      }

      .ProseMirror pre .hljs-comment,
      .ProseMirror pre .hljs-quote {
        color: #a3a3a3;
      }

      .ProseMirror pre .hljs-variable,
      .ProseMirror pre .hljs-template-variable,
      .ProseMirror pre .hljs-attribute,
      .ProseMirror pre .hljs-tag,
      .ProseMirror pre .hljs-name,
      .ProseMirror pre .hljs-regexp,
      .ProseMirror pre .hljs-link,
      .ProseMirror pre .hljs-name,
      .ProseMirror pre .hljs-selector-id,
      .ProseMirror pre .hljs-selector-class {
        color: #fca5a5;
      }

      .ProseMirror pre .hljs-number,
      .ProseMirror pre .hljs-meta,
      .ProseMirror pre .hljs-built_in,
      .ProseMirror pre .hljs-builtin-name,
      .ProseMirror pre .hljs-literal,
      .ProseMirror pre .hljs-type,
      .ProseMirror pre .hljs-params {
        color: #fdba74;
      }

      .ProseMirror pre .hljs-string,
      .ProseMirror pre .hljs-symbol,
      .ProseMirror pre .hljs-bullet {
        color: #bef264;
      }

      .ProseMirror pre .hljs-title,
      .ProseMirror pre .hljs-section {
        color: #fde047;
      }

      .ProseMirror pre .hljs-keyword,
      .ProseMirror pre .hljs-selector-tag {
        color: #5eead4;
      }

      .ProseMirror pre .hljs-emphasis {
        font-style: italic;
      }

      .ProseMirror pre .hljs-strong {
        font-weight: 700;
      }

      .dark .ProseMirror pre {
        background-color: #171717;
        border-color: #262626;
      }

      /* Image Block */
      .ProseMirror [data-type='imageBlock'] {
        margin: 0;
      }

      .ProseMirror [data-type='imageBlock'] img {
        border-radius: 0.25rem;
        display: block;
        width: 100%;
      }

      /* Block Quote */
      .ProseMirror blockquote > *:first-child {
        margin-top: 0;
      }

      .ProseMirror blockquote {
        border-left: 3px solid rgb(180, 181, 184);
        margin: 1.5rem 0;
        padding-left: 1rem;
      }

      /* Columns */
      .ProseMirror [data-type='columns'] {
        display: grid;
        gap: 1rem;
        margin-top: 3.5rem;
        margin-bottom: 3rem;
      }

      .ProseMirror [data-type='columns'].layout-sidebar-left {
        grid-template-columns: 40fr 60fr;
      }

      .ProseMirror [data-type='columns'].layout-sidebar-right {
        grid-template-columns: 60fr 40fr;
      }

      .ProseMirror [data-type='columns'].layout-two-column {
        grid-template-columns: 1fr 1fr;
      }

      .ProseMirror [data-type='column'] {
        overflow: auto;
      }

      /* Details */
      .ProseMirror [data-type='details'] {
        display: flex;
        gap: 0.25rem;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        margin-left: auto;
        margin-right: auto;
        padding: 0.5rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
      }

      .ProseMirror [data-type='details'] summary {
        font-weight: bold;
        display: block;
      }

      .ProseMirror [data-type='details'] > button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.25rem;
        font-size: 0.75rem;
        height: 1.25rem;
        width: 1.25rem;
      }

      .ProseMirror [data-type='details'] > button:hover {
        background-color: #d1d5db;
      }

      .dark .ProseMirror [data-type='details'] > button:hover {
        background-color: #1f2937;
      }

      .ProseMirror [data-type='details'] > button::before {
        content: '\\25B6';
      }

      .ProseMirror [data-type='details'].is-open > button::before {
        transform: rotate(90deg);
      }

      .ProseMirror [data-type='details'] > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
      }

      .ProseMirror
        [data-type='details']
        > div
        > [data-type='detailsContent']
        > :last-child {
        margin-bottom: 0.5rem;
      }

      .ProseMirror [data-type='details'] [data-type='details'] {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        margin-left: 0;
        margin-right: 0;
      }
    </style>
  </head>
  <body>
    <div class="ProseMirror">${content}</div>
  </body>
</html>`;
