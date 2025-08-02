"use client"
import React, { useEffect, useState } from 'react'

type props = {
    price:number;
    id:number;
    options?: {title:string; additionalPrice:number}[]
}

const Price = ({price,id,options}:props) => {
const [total,setTotal] = useState(price);
const [quantity,setquantity] = useState(1);
const [selected,setselected] = useState(0);

useEffect(() => {
    setTotal(quantity * (options ? price + options[selected].additionalPrice : price));
},[quantity,selected,options,price]);

  return (
    <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-bold'>${total.toFixed(2)}</h2>
        <div className='flex gap-4'>{options?.map((option,index) => (
            <button key={option.title} className='min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md'
            style={{background: selected === index ? "rgba(248 113 113)" :"white",
                color: selected === index ? "white" : "red",
            }}
            onClick={() => setselected(index)}
            >{option.title}</button>
            ))}
        </div>
        <div className='flex justify-between items-center'>
            <div className='flex justify-between w-full p-3 ring-1 ring-red-500'>
                <span>Quantity</span>
                <div className='flex gap-4'>
                    <button onClick={() => setquantity((prev) => (prev > 1 ? prev - 1 : 1))}>{'<'}</button>
                    <span>{quantity}</span>
                    <button onClick={() => setquantity((prev) => (prev < 9 ? prev + 1 : 9))}>{'>'}</button>
                </div>
            </div>
            <button className='bg-red-500 uppercase text-white p-3 ring-1 ring-red-500'>Add To cart</button>
        </div>
    </div>
    
  )
}

export default Price