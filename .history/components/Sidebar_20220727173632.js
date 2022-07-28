import React from 'react'
import { recommended_channels } from '../data/mock-data'
import { top_channels } from '../data/mock-data'
import { RiMovieLine } from 'react-icons/ri'

const Sidebar = () => {
  return (
    <div className={styles.container}>
        <div>
            <p>Recommended Channels</p>
            <p>
                <RiMovieLine size={30}/>
            </p>
        </div>
    </div>
  )
}

export default Sidebar
const styles ={
    container:`fixed w-14 sm:w-16 xl::w-[15rem] h-screen p-2 bg-[#0e0e10]`
}