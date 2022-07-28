import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.container}>
      {/* Left Bar */}
      <div className={styles.leftWrapper}>
        <Link href="/"></Link>
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