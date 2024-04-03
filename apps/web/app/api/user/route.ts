import { getServerSession } from 'next-auth';
import { authHandler } from '../../../lib/auth';
import { NextResponse } from 'next/server';

export async function GET() {
  const session = await getServerSession(authHandler);

  return NextResponse.json({
    session,
  });
}
