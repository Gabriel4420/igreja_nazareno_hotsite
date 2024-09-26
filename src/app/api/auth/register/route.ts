import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

// Função para criar um novo usuário usando Prisma
const createUserInDatabase = async (email: string, hashedPassword: string) => {
  try {
    // Verificar se o e-mail já está registrado
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error("User already exists");
    }

    // Criar o novo usuário
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return newUser;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Unknown error");
    }
  }
};

// Função handler para lidar com requisições POST e GET
export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    // Criptografar a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar o usuário no banco de dados usando Prisma
    const newUser = await createUserInDatabase(email, hashedPassword);

    return NextResponse.json({ message: "User created", user: newUser }, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { message: error?.message || "Internal server error" },
        { status: 500 }
      );
    }
  }
}

export async function GET() {
  return NextResponse.json({ message: "GET method not allowed" }, { status: 405 });
}
