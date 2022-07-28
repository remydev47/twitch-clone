import React from 'react'
import ChannellItem from './ChannellItem'
import live1 from '../public/assets/live/live1.jpeg'
import live2 from '../public/assets/live/live2.jpeg'
import live3 from '../public/assets/live/live3.jpeg'
import live4 from '../public/assets/live/live4.jpeg'
import live5 from '../public/assets/live/live5.jpeg'
import live16 from '../public/assets/live/live6.jpeg'
import live7 from '../public/assets/live/live7.jpeg'
import live8 from '../public/assets/live/live8.jpeg'
import live9 from '../public/assets/live/live9.jpeg'
import live10 from '../public/assets/live/live10.jpeg'
import live11 from '../public/assets/live/live11.jpeg'
import live12 from '../public/assets/live/live12.jpeg'

const LiveChannels = () => {
  return (
    <div id=''live className='p-2 md:p-8'>
        <h2 className={styles.live}>
            <span className='text-[#9147ff]'>Live Channels</span>
            <span> we think you might like</span>
        </h2>
        {/* video container */}
        <div className={styles.videoContainer}>
            <ChannellItem />
        </div>
    </div>
  )
}

export default LiveChannels

const styles = {
    live:`text-xl font-bold px-2`,
    videoContainer:`grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2`
}