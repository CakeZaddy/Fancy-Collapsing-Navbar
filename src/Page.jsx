import React from 'react'
import { Navbar } from './components/Navbar'

export const Page = () => {
  return (
    <div>
      <div className='bg-black-sky w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-screen bg-cover bg-center'>
        <Navbar />
      </div>
      <div className='bg-circle-scatter w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-screen bg-cover bg-center'></div>
      <div className='bg-blob-scene w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-screen bg-cover bg-center'></div>
      <div className='bg-layered-waves w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-screen bg-cover bg-center'></div>
    </div>
  )
}
