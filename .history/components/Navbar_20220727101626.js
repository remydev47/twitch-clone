import React from 'react'

const Navbar = () => {
  return (
    <div className={styles.container}>
      {/* Left Bar */}
      <div className={styles.leftWrapper}>

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