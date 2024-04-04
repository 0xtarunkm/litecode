import { AUTH_PROVIDERS } from '@/lib/auth';
import NextAuth from 'next-auth/next';

const handler = NextAuth(AUTH_PROVIDERS);

export { handler as GET, handler as POST };
