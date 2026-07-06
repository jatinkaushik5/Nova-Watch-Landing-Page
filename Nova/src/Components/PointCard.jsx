import React from 'react'
import { FaCheck } from "react-icons/fa6";

const PointCard = ({title,point}) => {
  return (
    <div className='flex gap-2 items-center  '>
        <FaCheck className='text-blue-400 bg-blue-100  h-6 w-6 p-1 rounded-full'/>
        <div className=''>
            <p className='font-semibold tracking-wide text-sm special'>{title}</p>
            <p className='text-sm text-gray-400'>{point}</p>
        </div>
    </div>
  )
}

export default PointCard