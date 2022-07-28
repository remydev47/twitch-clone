import React from 'react'
import ChannellItem from './ChannellItem'
import Live1 from '../public/assets/live/live1.jpeg'
import Live2 from '../public/assets/live/live2.jpeg'
import Live3 from '../public/assets/live/live3.jpeg'
import Live4 from '../public/assets/live/live4.jpeg'
import Live5 from '../public/assets/live/live5.jpeg'
import Live16 from '../public/assets/live/live6.jpeg'
import Live7 from '../public/assets/live/live7.jpeg'
import Live8 from '../public/assets/live/live8.jpeg'
import Live9 from '../public/assets/live/live9.jpeg'
import Live10 from '../public/assets/live/live10.jpeg'
import Live11 from '../public/assets/live/live11.jpeg'
import Live12 from '../public/assets/live/live12.jpeg'

const LiveChannels = () => {
  return (
    <div id=''live className='p-2 md:p-8'>
        <h2 className={styles.live}>
            <span className='text-[#9147ff]'>Live Channels</span>
            <span> we think you might like</span>
        </h2>
        {/* video container */}
        <div className={styles.videoContainer}>
            <ChannellItem 
              img={Live1}
              profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/4c0adb78-f81c-4dd3-bca7-61146eb163b9-profile_image-70x70.png'
              title='CHARITY STREAM! Any support is ap...'
              user='Natt'
              game='Valorant'
            />
        </div>
    </div>
  )
}

export default LiveChannels

const styles = {
    live:`text-xl font-bold px-2`,
    videoContainer:`grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2`
}