import React from 'react'
import { singleProduct } from '@/app/data'
import Image from 'next/image'
import Price from '@/app/components/Price'
const ProductId = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md: items-center'>
      {singleProduct.img && (
        <div className='relative w-full h-1/2 md:h-[70%]'>
          <Image src={singleProduct.img} alt='' fill className='object-contain'/>
        </div>
      )}
      <div className='h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center'>
        <h1 className='text-3xl font-bold uppercase xl:text-5xl'>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price = {singleProduct.price} id = {singleProduct.id} options = {singleProduct.options}/>
      </div>
    </div>
  )
}

export default ProductId