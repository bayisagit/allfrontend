import React from 'react'
import { useState } from "react"

function Cards( {title, description} ) {
    const [isShow, setIsShow] = useState(true);
   

    const toggle = () => {
      setIsShow(!isShow);
    };
  return (
    <div className=" flex justify-center item-center py-2">
      <div className={` w-[40%] ${isShow? "h-56" : "h-20"} bg-white  border-2 border-gray-300 rounded-lg`} >
        <div className="flex justify-between p-4 items-center text-lg font-bold  ">
          <p className="">{title}</p>
          <button onClick={toggle} className="text-4xl ">
            {isShow ? "-" : "+"}
          </button>
        </div>
        {isShow?  (<div>
          <div className="w-full border-b-2 border-gray-300"></div>
          <div className="p-4">
            <p>{description}</p>
          </div>
        </div>) : ""}
      </div>
    </div>
  )
}

export default Cards