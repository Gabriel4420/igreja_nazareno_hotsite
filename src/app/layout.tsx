// Marcar como Client Component
"use client";

import "./globals.css";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html>
      <body>
        <SessionProvider>
          {children}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
          />
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
