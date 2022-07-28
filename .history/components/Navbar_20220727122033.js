import React, { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/assets/logo.png'
import { BsPerson, BsSearch, BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Menu, Transition } from '@headlessui/react'
import { useState } from 'react'


function classNames(...classes) {
  return classes.filter(Boolean).join('')
}

const Navbar = () => {
  return (
    <div className={styles.container}>
      {/* Left Bar */}
      <div className={styles.leftWrapper}>
        <Link href="/">
          <a>
            <Image 
              alt="/"
              src={Logo}
              height={36}
              width={36}
              className='cursor-pointer z-10'
            />
          </a>
        </Link>
        <p className='p-4'>Browse</p>
        <div className='p-4'>
        <Menu as='div' className='relative text-left'>
            <div className='flex'>
              <Menu.Button>
                <BsThreeDotsVertical size={20} />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Support
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        License
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
       </div>
      </div>
      {/* Middlebar */}
      <div className={styles.middleContainer}>
        <div className={styles.middleWrapper}>
          <div>
            <input 
               type="text" 
               placeholder='Search'
               className={styles.input}
             />
          </div>
          <div>
            <BsSearch size={30} />
          </div>
        </div>
      </div>
      {/* Rightside */}
      <div className={styles.rightContainer}>
        <div className={styles.rightWrapper}>
          <Link href="/">
            <button className={styles.accountContainer}>
              Account
            </button>
          </Link>
          <BsPerson size={30}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar

const styles ={
    container:`fixed h-14 w-full flex flex-nowrap items-center p-4 bg-[#0e0e10] mb-[2px] z-10`,
    leftWrapper:`flex grow items-center justify-start`,
    middleContainer:`hidden md:flex grow-[2] justify-center item-center`,
    middleWrapper:`flex bg-gray-400 text-white justify-center items-center max-w-[400px] w-full m-auto p-2 rounded-2xl`,
    input:`bg-transparent border-none text-white focus:outline-none`,
    rightContainer:`hidden md:flex grow items-center justify-end`,
    rightWrapper:`flex items-center`,
    accountContainer:`px-4 py-[6px] font-bold rounded-xl bg-[#9147FF] mr-2`
}