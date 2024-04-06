'use client';

import React from 'react';
import Markdown from 'react-markdown';

export default function Description({ desc }: { desc: string }) {
  return (
    <div className="prose p-6 ">
      <Markdown>{desc}</Markdown>
    </div>
  );
}
