"use client"
import React from 'react'
import Countdown from 'react-countdown'

const endingdate = new Date("2025-7-29")

const Countdowns = () => {
  return (
    <div><Countdown className='font-bold text-5xl text-yellow-300' date={endingdate}/></div>
  )
}

export default Countdowns