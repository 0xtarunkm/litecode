'use client';
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { TooltipProvider } from '@/components/ui/tooltip';
import { RecoilRoot } from 'recoil';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      <SessionProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </SessionProvider>
    </RecoilRoot>
  );
};
