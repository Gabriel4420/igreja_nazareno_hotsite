
'use client'
import { getSession, useSession } from "next-auth/react";

import { useRouter } from "next/router";

export default  function Dashboard() {
    const { data: session } = useSession();
    const router = useRouter();
  
    if (!session) {
      router.push('/auth/signin');
      return null;
    }

  

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bem-vindo, {session.user?.name}</p>
    </div>
  );
}
