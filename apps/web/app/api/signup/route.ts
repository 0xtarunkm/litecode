import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@repo/database';
import bcrypt from 'bcryptjs';
import prisma from '../../../db';

export async function POST(req: NextRequest) {
  try {
    const { name, username, email, password } = await req.json();

    // check existing user
    const existingUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json({
        success: false,
        message: 'User already exists',
      });
    }

    // check for the username
    const existingUsername = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (existingUsername) {
      return NextResponse.json({
        success: false,
        message: 'username not available',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        username,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      message: 'success',
      user,
    });
  } catch (error) {
    console.log(error);
  }
}
