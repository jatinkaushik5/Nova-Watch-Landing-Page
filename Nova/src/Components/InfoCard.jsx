import React from 'react'

const InfoCard = ({t1,t2,para}) => {
  return (
    <div className='h-52 col-span-1 flex flex-col items-center justify-center border-b md:border-r border-gray-800'>
        <div className='flex '><h1 className='text-white text-6xl'>{t1}</h1>
        <h2 className='text-blue-500 text-xl py-7'>{t2}</h2>
    </div>
    <h2 className='text-gray-500'>{para}</h2>
    </div>
  )
}

export default InfoCard