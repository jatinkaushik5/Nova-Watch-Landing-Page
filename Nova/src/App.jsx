import React from 'react'
import Header from './Components/Header'
import { IoIosArrowForward } from "react-icons/io";
import Watch from "./assets/Watch.jpg"
import Img2 from "./assets/Img2.avif"
import PointCard from './Components/PointCard';
const App = () => {
  return (
    <>
    <Header/>
    <main className='  flex flex-col items-center pt-10 gap-4 '>
      <h1 className='text-4xl md:text-6xl lg:text-8xl flex items-center font-bold'>The Future.</h1>
      <h2 className='text-4xl md:text-6xl lg:text-8xl flex items-center font-bold text-blue-500'>Reimagined.</h2>
      <p className='mt-4  text-lg md:text-xl lg:text-2xl w-[85%] md:w-[70%] lg:w-[40%] text-gray-500'>An AI-powered wearable that doesn't just sit on your wrist — it thinks, adapts, and evolves with you. Intelligence you can feel.</p>

      <div className='space-x-9 flex mt-10'>
        <button className='bg-blue-500 text-white font-semibold px-4 py-2 md:px-6 md:py-3 rounded-4xl shadow-md'>Learn More</button>
        <button className='  border border-gray-300 font-semibold px-4 py-2 md:px-6 md:py-3 rounded-4xl shadow-md flex items-center gap-4 '>Buy Now <IoIosArrowForward /></button>
      </div>

      <div className=' h-[50vh]  w-[80vw] md:w-[50vw] lg:w-[30vw]  relative mb-2 flex justify-center items-center mt-8'>
        <div className=' h-[95%] w-[80%]  rounded-2xl bg-center bg-cover bg-no-repeat' style={{backgroundImage:`url(${Watch})`}}></div>

        <div className='absolute top-0 left-0 h-full w-full  flex justify-between flex-col'>
          <div className='flex justify-end w-full lg:p-8'>
            <div className='flex flex-col p-1 gap-2 bg-white rounded-2xl shadow-lg border border-gray-200 h-fit '>
              <p className='text-sm font-semibold text-gray-600'>AI PROCESSING</p>
              <p className='font-bold'>4.2 TOPS</p>
            </div>
          </div>

          <div className='flex items-center justify-start '>
             <div className='flex flex-col p-1 gap-2 bg-white rounded-2xl shadow-lg border border-gray-200 h-fit '>
              <p className='text-sm font-semibold text-gray-600'>Battery Life</p>
              <p className='font-bold'>72 Hours</p>
            </div>
        
          </div>
        </div>
      </div>
   
    
    </main>

    <article className=' bg-gray-100 w-screen flex md:flex-row flex-col  max-md:gap-9   p-8 lg:p-10'>
      <div className=' h-full w-full md:w-[50%]  flex  justify-center md:justify-end items-end'>
        <img src={Img2} alt="" className='h-[40vh] md:h-[80vh]' />
      </div>
      <div className=' h-full w-full md:w-[50%]  flex flex-col pt-5 pl-5 lg:pt-10 lg:pl-10 gap-4  '>
      <p className='text-blue-500  text-sm font-semibold'>PRODUCT SHOWCASE</p>
        <h3 className='text-6xl font-bold tracking-wide'>Engineered <br />to Perfection.</h3>
        <p className='text-gray-500 w-[90%] md:w-[80%] lg:w-[45%]'>Every curve, every material, every algorithm — designed in obsessive detail. The Nova X1 is the culmination of five years of biomechanics research and silicon innovation.</p>

        <div className='flex flex-col gap-5 mt-4'>
          <PointCard title={'Quantum Neural Engine'} point={'On-device inference at 4.2 TOPS'}/>
          <PointCard title={'Bio-Adaptive Shell'} point={'Responds to skin temperature and pH'}/>
          <PointCard title={'Photonic Display'} point={'Always-on at 2,000 nits peak'}/>
        </div>
      </div>
      
    </article>
    </>
  )
}

export default App