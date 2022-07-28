import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'

const account = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className={styles.signIn}>
        <h1 className="text-2xl font-bold">Welcome, {session.user.name} </h1>
        <p className="py-4">Signed us {session.user.email}</p>
        <div className='pb-4 m-auto'>
            <Image
              className="rounded-full"
              src={session.user.image} 
              alt="/"
              width="100"
              height="100"
            />
        </div>
        <button className={styles.signOut} onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <div className={styles.signIn}>
      <h2 className="text-3xl font-bold"> Login </h2>
      <p className="py-2">Choose the Account that you want Login with.</p>
      <button 
       onClick={() => signIn()}
       className={styles.button}
       >
        <FaGithub className="mr-2"/>
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
    github:`font-bold pl-1`,
    button:`flex items-center justify-center bg-gray-600 p-3 my-2 border border-gray-600`,
    signOut:`flex items-center justify-center p-3 bg-gray-600 border border-gray-600`
}