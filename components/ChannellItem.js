import Image from 'next/image'
import React from 'react'

const ChannellItem = ({img, profile_img, title, user, game}) => {
  return (
    <div classNae='p-2'>
        <Image 
         src={img}
        />
        <div className='flex pt-2'>
            <div>
                <Image src={profile_img} width='60' height='60' className='rounded-full'/>
            </div>
            <div>
                <p className='text-sm font-bold'>{title}</p>
                <p className='text-sm text-gray-400'>{user}</p>
                <p className='text-sm text-gray-400'>{game}</p>
            </div>
        </div>
    </div>
  )
}

export default ChannellItem