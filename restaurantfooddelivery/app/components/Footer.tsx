import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='h-12 md:h-24 px-4 lg:p-20 xl:px-40 text-red-500 flex items-center justify-between'>
      <Link href="/" className='font-bold uppercase'>Irbaata</Link>
      <p>© All rights reserved</p>
    </div>
  )
}

export default Footer