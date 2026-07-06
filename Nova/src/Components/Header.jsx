import React from 'react'
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (<>
    <header className='flex items-center justify-between px-10 md:justify-evenly  pt-6'>
        <h1 className='text-blue-500 font-semibold'>Nova</h1>
        
        <nav className='flex max-md:hidden items-center gap-4 '>
            <p className='text-sm text-gray-600'>Features</p>
            <p className='text-sm text-gray-600'>Gallery</p>
            <p className='text-sm text-gray-600'>Technology</p>
            <p className='text-sm text-gray-600'>Performance</p>
            <p className='text-sm text-gray-600'>Pricing</p>
        </nav>
        <FaBars className='md:hidden'/>
        <button className='text-sm font-bold max-md:hidden text-white bg-blue-500 px-3 py-2 rounded-2xl shadow-md '>Buy Now</button>
    </header>

    <div className='flex justify-center mt-7 items-center gap-2  '>
        <div  className='flex items-center border border-blue-300 gap-3 bg-blue-200 py-1 px-2 rounded-2xl '>
        <div className='h-2 w-2 rounded-full bg-blue-600'></div>
        <p className='text-blue-700 special text-sm'>introducting Nova X1</p>
        </div>
    </div>
    </>
  )
}

export default Header