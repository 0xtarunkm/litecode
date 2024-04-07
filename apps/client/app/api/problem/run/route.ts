import { client } from '@/lib/producer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { problemId, code, testcase, userId, language } = await req.json();

    await client.lPush(
      'problems-queue',
      JSON.stringify({
        type: 'run',
        payload: {
          problemId,
          code,
          testcase,
          userId,
          language,
        },
      })
    );

    return NextResponse.json({});
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}
