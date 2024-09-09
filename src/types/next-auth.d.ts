// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      image?: string | null;
      password: string // Ou `number`, dependendo do tipo do ID no banco de dados
    } & DefaultSession["user"];
  }
}
