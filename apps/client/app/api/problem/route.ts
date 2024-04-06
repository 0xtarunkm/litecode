import { NextRequest, NextResponse } from 'next/server';
import prisma from '@repo/database/client';

export async function POST(req: NextRequest) {
  try {
    const { title, description, boilerplate, testcase, language } =
      await req.json();

    const problem = await prisma.problem.create({
      data: {
        title,
        description,
        testCases: {
          create: {
            content: testcase,
            language,
          },
        },
        languages: [language],
        boilerplates: {
          create: {
            content: boilerplate,
            language,
          },
        },
      },
    });

    return NextResponse.json(problem);
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}
