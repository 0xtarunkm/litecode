'use client';

import { useRouter } from 'next/navigation';
import { signIn, signOut } from 'next-auth/react';
import React from 'react';

export default function AppBar() {
  return (
    <div>
      <button onClick={() => signIn()}>Login</button>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}
