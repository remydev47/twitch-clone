import Image from 'next/image';
import React from 'react'
import headphones from '../public/assets/headphones.png'
import mic from '../public/assets/mic.png';
import paint from '../public/assets/paint.png';
import remote from '../public/assets/remote.png';
import trophy from '../public/assets/trophy.png'

const BarIcon = () => {
  return (
    <div className='p-2 md:p-8'>
        <div className='grid sm:grid-cols-3 lg:grid-cols-5 gap-4 border-t border-gray-700 py-8'>
            <div className='w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 relative'>
                <p>Games</p>
                <Image
                  src={remote} 
                />
            </div>
            <div className='w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 relative'>
                <p>IRL</p>
                <Image
                  src={mic} 
                />
            </div>
            <div className='w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 relative'>
                <p>Music</p>
                <Image
                  src={headphones} 
                />
            </div>
            <div className='w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 relative'>
                <p>Esports</p>
                <Image
                  src={trophy} 
                />
            </div>
            <div className='w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 relative'>
                <p>Creative</p>
                <Image
                  src={paint} 
                />
            </div>
        </div>
    </div>
  )
}

export default BarIcon