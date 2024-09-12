// Marcar como Client Component
'use client';

import "./globals.css";
import Header from "@/components/ui/header/header";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SessionProvider>
      <Header />
      {children}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
    </SessionProvider>
  );
};

export default RootLayout;
