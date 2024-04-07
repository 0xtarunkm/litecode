'use client';

import Editor from '@monaco-editor/react';
import { useSetRecoilState } from 'recoil';
import { codeAtom } from '@repo/store';
import { useState } from 'react';

export default function CodeEditor() {
  const [code, setCode] = useState('');
  const setProblem = useSetRecoilState(codeAtom);

  setProblem((prev) => ({
    ...prev,
    code,
  }));
  return (
    <div>
      <Editor
        width={`100%`}
        height={`100%`}
        defaultLanguage="javascript"
        defaultValue={code}
        onChange={(value) => setCode(value!)}
        className="min-h-[calc(100vh-50px)] border-0 p-3 shadow-none focus-visible:ring-0"
      />
    </div>
  );
}
