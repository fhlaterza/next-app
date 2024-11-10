import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession();
  if (session) 
    console.log(session.user);
  else console.log('deslogado');

  if (session) {
    return (
      <>
        <img src={session.user.image}></img>
        Signed in as {session.user.name} <br />
        <button onClick={() => signOut('github')}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn('github')}>Sign in</button>
    </>
  )
}
