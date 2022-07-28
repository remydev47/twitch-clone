import React from 'react'

const LiveChannels = () => {
  return (
    <div className='p-2 md:p-8'>
        <h2 className={styles.live}>
            <span className='text-[#9147ff]'>Live Channels</span>
            <span> we think you might like</span>
        </h2>
    </div>
  )
}

export default LiveChannels

const styles = {
    live:`text-xl font-bold px-2`
}