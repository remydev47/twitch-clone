import Navbar from '../components/Navbar';
import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'

function MyApp({ session, Component, pageProps }) {
  return (
    <SessionProvider session={session}>
    <Navbar />
   <Component {...pageProps} />
  </SessionProvider>
  )
}

export default MyApp
