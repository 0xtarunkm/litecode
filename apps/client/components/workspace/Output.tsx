'use client';

import { useEffect, useState } from 'react';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';

export default function Output() {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [result, setResult] = useState<string[]>([]);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:5001');

    ws.onopen = () => {
      console.log('Connected');
    };

    ws.onmessage = (message) => {
      setResult((prev) => [...prev, message.data]);
      console.log(message);
    };

    ws.onclose = () => {
      console.log('Disconnected');
    };

    setWs(ws);
  }, []);

  return (
    <div className="">
      <button
        onClick={() => {
          ws?.send('Hello');
          console.log('Sent');
        }}
      >
        Hi
      </button>
      <Label htmlFor="result">Output</Label>

      <Textarea value={result} readOnly id="result" rows={7} />
    </div>
  );
}
