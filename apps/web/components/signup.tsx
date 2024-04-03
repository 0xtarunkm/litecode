'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Signup() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <div className="flex flex-col h-screen mx-auto items-center justify-center space-y-4">
        <header className="text-4xl font-semibold mb-4">
          Create your account
        </header>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="outline-none border-[1px] px-2 py-1 rounded-md w-[300px]"
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="outline-none border-[1px] px-2 py-1 rounded-md w-[300px]"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="outline-none border-[1px] px-2 py-1 rounded-md w-[300px]"
        />
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="outline-none border-[1px] px-2 py-1 rounded-md w-[300px]"
        />

        <button className="bg-blue-500 w-[300px] py-2 px-3 rounded-md text-white font-semibold">
          Signup
        </button>
        <p>
          If you're already a user <Link href={'/api/auth/signin'}>Login</Link>
        </p>
      </div>
    </div>
  );
}
