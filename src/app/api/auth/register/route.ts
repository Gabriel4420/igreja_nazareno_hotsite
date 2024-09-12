import { NextApiRequest, NextApiResponse } from "next";
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
      throw new Error(error.message); // Acessando a propriedade message se for um objeto Error
    } else {
      throw new Error("Unknown error"); // Caso não seja um Error
    }
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // Criptografar a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar o usuário no banco de dados usando Prisma
    const newUser = await createUserInDatabase(email, hashedPassword);

    return res.status(201).json({ message: "User created", user: newUser });
  } catch (error) {
    if (error instanceof Error) {
      return res
        .status(500)
        .json({ message: error?.message || "Internal server error" }); // Acessando a propriedade message se for um objeto Error
    }
  }
}
