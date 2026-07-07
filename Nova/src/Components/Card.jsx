import React from 'react'


const Card = ({Icon,title,about}) => {
  return (
    <div className=' h-60 w-[80vw] md:w-[40vw] lg:w-70 rounded-lg shadow-md bg-gray-100  p-7 space-y-3'>
      <Icon  className="text-blue-500 bg-white rounded-md p-1  h-10 w-10 shadow-md border border-gray-100"/>
      <h1 className='font-semibold text-xl'>{title}</h1>
      <p className='text-sm text-gray-600'>{about}</p>
    </div>
  )
}

export default Card