import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Igreja Nazareno Mirassol",
  description: "uma igreja evangelista a serviço do reino de Deus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <Header/>
        {children}</body>
    </html>
  );
}
