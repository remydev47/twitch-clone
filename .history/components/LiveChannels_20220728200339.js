import React from 'react'

const LiveChannels = () => {
  return (
    <div>
        <h2 className={styles.live}>
            <span>Live Channels</span>
            <span> we think you might like</span>
        </h2>
    </div>
  )
}

export default LiveChannels

const styles = {
    live:`text-xl font-bold px-2`
}