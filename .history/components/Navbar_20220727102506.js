import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/assets/logo.png'

const Navbar = () => {
  return (
    <div className={styles.container}>
      {/* Left Bar */}
      <div className={styles.leftWrapper}>
        <Link href="/">
          <a>
            <Image 
              alt="/"
              src={Logo}
              height={36}
              width={36}
              className='cursor-pointer z-10'
            />
          </a>
        </Link>
        <p className='p-4'>Browse</p>
      </div>
      {/* Middlebar */}
      {/* Rightside */}
    </div>
  )
}

export default Navbar

const styles ={
    container:`fixed h-14 w-full flex flex-nowrap items-center p-4 bg-[#0e0e10] mb-[2px] z-10`,
    leftWrapper:`flex grow items-center justify-start`
}