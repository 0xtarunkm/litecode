'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { signIn } from 'next-auth/react';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  return (
    <div>
      <div className="flex flex-col h-screen mx-auto items-center justify-center space-y-4">
        <header className="text-4xl font-semibold mb-4">Login</header>

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

        <button
          className="bg-blue-500 w-[300px] py-2 px-3 rounded-md text-white font-semibold"
          onClick={async () => {
            const res = await signIn('credentials', {
              email,
              password,
              redirect: false,
            });
            console.log(res);
            router.push('/');
          }}
        >
          Login
        </button>
        <button
          onClick={async () => {
            await signIn('github', { redirect: true });
          }}
        >
          Login with Github
        </button>
        <p>
          If you're not a user <Link href={'/signup'}>Register</Link>
        </p>
      </div>
    </div>
  );
}
