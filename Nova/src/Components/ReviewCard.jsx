import React from 'react'
import { FaStar } from "react-icons/fa";

const ReviewCard = ({review,name,info}) => {

  function extract(name){
    const initals=name?.split(" ").map(n=>n[0]).join("").toUpperCase();
    return initals;
  }



  return (
    <div className=' h-72 w-[80vw] md:w-[50vw] lg:w-[28vw] xl:w-[22vw] flex flex-col  p-5 sm:p-8 lg:p-8 gap-6 bg-white rounded-2xl shadow-md'>
      <div className='flex items-center text-yellow-400'>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
      </div>
      <p className='max-sm:text-sm '>“{review}”</p>
    <div className='flex items-center gap-4'>
      <span className='bg-blue-600 text-white p-2 rounded-full shadow-md'>{extract(name)}</span>
      <div>
        <p className='font-semibold max-sm:text-xs'>{name}</p>
        <p className='text-sm text-gray-600 max-sm:text-sm'>{info}</p>
      </div>
    </div>
    </div>
  )
}

export default ReviewCard