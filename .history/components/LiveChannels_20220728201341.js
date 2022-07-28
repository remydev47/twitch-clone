import React from 'react'

const LiveChannels = () => {
  return (
    <div id=''live className='p-2 md:p-8'>
        <h2 className={styles.live}>
            <span className='text-[#9147ff]'>Live Channels</span>
            <span> we think you might like</span>
        </h2>
        {/* video container */}
        <div className={styles.videoContainer}>

        </div>
    </div>
  )
}

export default LiveChannels

const styles = {
    live:`text-xl font-bold px-2`,
    videoContainer:`grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2`
}