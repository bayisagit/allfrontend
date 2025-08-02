import React from 'react'
import Image from 'next/image'
import Countdowns from './Countdowns'
const Offer = () => {
  return (
<div
  className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:h-[70vh]"
  style={{ backgroundImage: "url('/offerBg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
>
      <div className='flex-1 flex flex-col justify-center items-center text-center gap-8 p-6'>
        <h1 className='text-white text-5xl font-bold xl:text-6xl'>Delicious Burger & French Fry</h1>
        <p className='text-white xl:text-lg'>
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.        
        </p>
        <Countdowns/>
        <button className='bg-red-500 text-white rounded-md py-3 px-6'>Order Now</button>
      </div>
      <div className='flex-1 w-full relative md:h-full'>
        <Image src="/offerProduct.png" alt='photo' fill className='object-contain' />
      </div>
    </div>
  )
}

export default Offer