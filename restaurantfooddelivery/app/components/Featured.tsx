import React from 'react'
import Image from 'next/image'
import { featuredProducts } from '../data'
const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-red-500'>
      <div className='w-max flex'>
        {featuredProducts.map((item) => (
          <div key={item.id} className='w-screen h-[60vh] flex flex-col items-center p-4 justify-around hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]'>
            {item.img && (
              <div className='relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500'>
                <Image src={item.img} alt="" fill className='object-contain'/>
              </div>
            )}
            <div className='items-center text-center flex flex-col gap-4 justify-center'>
              <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl'>{item.title}</h1>
              <p className='p-4 2xl:p-8'>{item.desc}</p>
              <span className='text-lg font-bold'>${item.price}</span>
              <button className='bg-red-500 text-white p-2 rounded-md'>Add to Curt</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Featured