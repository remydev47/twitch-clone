import React from 'react'
import { recommended_channels } from '../data/mock-data'
import { top_channels } from '../data/mock-data'

const Sidebar = () => {
  return (
    <div className={styles.container}></div>
  )
}

export default Sidebar
const styles ={
    container:`fixed w-14 sm:w-16 xl::w-[15rem] h-screen p-2 bg-[#0e0e10]`
}