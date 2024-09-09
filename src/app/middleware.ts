import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";

export default async function middleware(req: any) {
  const session = await getSession({ req });
  if (!session) {
    return NextResponse.redirect("/api/auth/signin");
  }
}
