'use client';

import Editor from '@monaco-editor/react';

export default function CodeEditor() {
  return (
    <div>
      <Editor
        width={`100%`}
        height={`100%`}
        defaultLanguage="javascript"
        defaultValue={`// Write your testcase file here.`}
        className="min-h-[calc(100vh-50px)] border-0 p-3 shadow-none focus-visible:ring-0"
      />
    </div>
  );
}
