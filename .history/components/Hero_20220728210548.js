import React from 'react'

const Hero = () => {
  return (
    <div id='hero' className='p-2 md:p-8'>
        <iframe 
        className='absolute top-0 left-0 right-0 bottom-0 w-full h-full' 
        src="https://www.youtube.com/embed/dFvx-4gb-p4" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        >

        </iframe>
    </div>
  )
}

export default Hero