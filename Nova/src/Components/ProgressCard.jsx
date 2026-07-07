import React from 'react'

const ProgressCard = ({title,percentage,para,color}) => {
  return (
    <div className='h-30 md:w-md rounded-2xl bg-[#0D0D0D] space-y-3 border p-7'>
        <div className='flex text-white justify-between'>
            <h1>{title}</h1>
            <p>{percentage}%</p>
        </div>
        <div className='w-full h-3 bg-gray-400 rounded-2xl'>
            <div className={`${color} h-full rounded-2xl w-[${percentage}%]`}></div>
        </div>
        <p className='text-xs text-gray-500'>{para}</p>
    </div>
  )
}

export default ProgressCard