import NextAuth from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import { authHandler } from '../../../../lib/auth';
const handler = NextAuth(authHandler);

export const GET = handler;
export const POST = handler;
