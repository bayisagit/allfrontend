import React,{Component} from 'react'
import { useState } from 'react'

export default function Counter() {
  const [count,setcount]=useState(0)
  return (
    <div className='bg-amber-200 h-170 text-4xl'>
        <h1 className='absolute top-40 pr-10 pt-10 pb-7 bg-amber-300 mr-70 pl-9 rounded-4xl mb-70  ml-70 cursor-pointer'>count: {count}</h1>
        <button className='absolute top-90 left-20 bg-amber-500 p-5 rounded-4xl cursor-pointer' onClick={()=>setcount(count+1)}>increment</button>
        <button className='absolute top-90 left-80 bg-amber-500 p-5 rounded-4xl cursor-pointer' onClick={()=>setcount(count-1)} disabled={count===0} >decrement</button>
        <button className='absolute top-90 left-150 bg-amber-500 p-5 rounded-4xl cursor-pointer' onClick={()=>setcount(0)}>reset</button>
    </div>
  )
}