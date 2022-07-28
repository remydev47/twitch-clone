import Image from 'next/image'
import React from 'react'

const ChannellItem = ({img, profile_img, title, user}) => {
  return (
    <div classNae='p-2'>
        <Image 
         src={img}
        />
        <div>
            <div>
                <Image src={profile_img} width='60' height='60' className='rounded-full'/>
            </div>
            <div>
                <p>{title}</p>
                <p>{user}</p>
            </div>
        </div>
    </div>
  )
}

export default ChannellItem