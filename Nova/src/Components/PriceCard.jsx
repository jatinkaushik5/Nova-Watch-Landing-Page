import React from 'react'

import { FaCheck } from "react-icons/fa6";

const PriceCard = ({title,price,about,points,order,dark}) => {
  return (
    <div className={`h-[50vh] lg:w-[21vw] p-4 md:p-7 lg:p-10 rounded-2xl ${dark?"bg-slate-950":"bg-gray-100"} border border-gray-300 shadow-md flex flex-col  justify-between`}>
        <h1 className=' text-blue-500 font-semibold' >{title}</h1>
        <p className={`font-extrabold text-5xl ${dark?"text-white":""}`}>${price}</p>
        <p className='text-gray-400'>{about}</p>

        <div className='flex flex-col gap-4'>
            {points.map(p=>(
                <div className='flex items-center gap-4'>
                     
                     <FaCheck className='text-blue-400 bg-blue-100  h-6 w-6 p-1 rounded-full'/>
                     <p className={`${dark?"text-gray-500":"text-gray-700"}`}>{p}</p>
                </div>
            ))}
        </div>


        <button className={`w-[90%] p-3 rounded-3xl ${dark?"bg-blue-600":"bg-slate-950"}  text-white font-semibold`}>
            {order}
        </button>
    </div>
  )
}

export default PriceCard