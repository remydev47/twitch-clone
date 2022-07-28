import React from 'react'
import { recommended_channels } from '../data/mock-data'
import { top_channels } from '../data/mock-data'
import { RiMovieLine } from 'react-icons/ri'
import Image from 'next/image'
import { BsDot } from 'react-icons/bs'

const Sidebar = () => {
  return (
    <div className={styles.container}>
        <div>
            <p className={styles.channels}>Recommended Channels</p>
            <p>
                <RiMovieLine size={30} className={styles.movieIcon}/>
            </p>
        </div>
        {recommended_channels.map((item, index) => (
          <div key={index} className={styles.mapchannel}>
            <div>
              <Image 
                src={item.avatar}
                width='50'
                height='50'
              />
            </div>
            <div className={styles.username}>
              <div>
                <p>{item.username}</p>
                <p className='text-gray-400'>{item.game_name}</p>
              </div>
              <p>
                <BsDot size={25} color='red'/>
                {item.rank}
              </p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Sidebar
const styles ={
    container:`fixed w-14 sm:w-16 xl:w-[15rem] h-screen p-2 bg-[#0e0e10] cursor-pointer`,
    channels:`hidden xl:flex uppercase font-bold text-sm`,
    movieIcon: `xl:hidden justify-center w-full`,
    mapchannel:`inline-flex items-center w-full py-[2px]`,
    username: `hidden xl:flex justify-between w-full`,
   
}