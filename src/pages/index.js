import Head from "next/head";

import styles from "@/styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session, status } = useSession();
  console.log(session);
  console.log(status);
  if (session) {
    
    return (
      <>
        
      Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
        
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
