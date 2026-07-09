import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";

const QuestionCard = ({question,answer}) => {

  const [show, setshow] = useState(false)
  return (
    <>
    <div className={`${show?"min-h-32 ":"h-16"}  overflow-hidden  sm:w-[80vw] md:w-[60vw] lg:w-[40vw]  gap- 4  rounded-2xl  bg-white border transition-all duration-300 border-gray-300  `} onClick={()=>setshow(!show)}>
      <div className='flex items-center justify-between  h-16 px-2' >
        <p className=' font-semibold'>{question}?</p>
        <span className='bg-gray-200 p-2 rounded-full shadow-md'><FaPlus/></span> 
    </div>
    <div className={`${show?"flex":"hidden"} items-center px-2  `}>
      <p className='text-gray-500 text-sm'>{answer}</p>
    </div>
    </div>
    
    </>
  )
}

export default QuestionCard