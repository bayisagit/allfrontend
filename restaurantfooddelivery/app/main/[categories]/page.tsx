import React from 'react'
import Link from 'next/link'
import { pizzas } from '@/app/data'

import Image from 'next/image'

const CategoriesId = () => {
  return (
    <div className='flex flex-wrap text-red-500'>
      {pizzas.map(item =>(
        <Link className='w-full h-[60vh] border-r-2 border-b-2 flex flex-col justify-between group border-red-500 md:w-1/2 xl:w-1/3 even:bg-fuchsia-50' href={'/product/${item.id}'} key={item.id}>
          {item.img && (
            <div className='relative h-[80%]'>
              <Image src={item.img} alt='' fill className='object-contain'/>
            </div>
          )}
          <div className='flex items-center justify-between font-bold'>
            <h1 className='text-2xl uppercase p-2'>{item.title}</h1>
            <h2 className='group-hover:hidden text-xl'>${item.price}</h2>
            <button className='hidden group-hover:block uppercase bg-red-500 text-white p-2 mr-2 rounded-md'>Add To Cart</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CategoriesId