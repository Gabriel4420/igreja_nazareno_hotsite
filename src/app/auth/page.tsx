// app/login/page.tsx
'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginPage() {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn('credentials', {
      email: userInfo.email,
      password: userInfo.password,
      callbackUrl: '/',
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-1/3">
        <input
          type="email"
          placeholder="Email"
          value={userInfo.email}
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          className="mb-2 px-4 py-2 border rounded"
        />
        <input
          type="password"
          placeholder="Senha"
          value={userInfo.password}
          onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
          className="mb-2 px-4 py-2 border rounded"
        />
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
          Entrar
        </button>
      </form>
    </div>
  );
}
