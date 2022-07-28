import { useSession, signIn, signOut } from "next-auth/react"

const account = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <div className={styles.signIn}>
      <h2> Login </h2>
      <p>Choose the Account that you want Login with</p>
      <button onClick={() => signIn()}>
        Sign in
        <span className={styles.github}>
            Github
        </span>
    </button>
    </div>
  )
}

export default account;
const styles = {
    signIn:`pt-[100px] flex flex-col max-w-[400px] w-full mx-auto p-4`,
    gihub:`font-bold pl-1`
}