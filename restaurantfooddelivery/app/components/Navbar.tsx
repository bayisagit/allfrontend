import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import Carticon from './Carticon';
import Image from 'next/image';
const Navbar = () => {
  const user = false;
  return (
    <div className='h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:24 lg:px-20 xl:40px' >
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href="/">Homepage</Link>
        <Link href="/main">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className='text-xl md:font-bold flex-1 md:text-center'>
          <Link href="/">Irbaata</Link>
      </div>
      <div className='md:hidden'>
          <Menu/>
      </div>
      <div className='hidden md:flex gap-4 items-center flex-1 justify-end'>
        <div className='md:absolute top-3 r-2 lg:static flex items-center gap-4 item cursor-pointer bg-orange-300 px-1 rounded-md'>
          <Image src="/phone.png" alt='' width={20} height={20}/>
          <span>123 456 890</span>
        </div>
        {!user ? (<Link href="/login">Login</Link>
        ) : (
        <Link href="/orders">Orders</Link>
        )}
        <Carticon/>
      </div>
    </div>
  )
}

export default Navbar