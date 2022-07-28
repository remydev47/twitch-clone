import React from 'react'
import Hero from './Hero'
import LiveChannels from './LiveChannels'

const Main = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <LiveChannels />
    </div>
  )
}

export default Main
const styles = {
  container:`absolute left-[64px] xl:left-[220px]`
}