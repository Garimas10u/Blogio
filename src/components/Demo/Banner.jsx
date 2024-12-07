import React from 'react'
import typewriter from '../../assets/typewriter.png'

const Banner = () => {
  return (
    <div>
        <div className='md:flex md:flex-nowrap overflow-hidden  sm:flex-wrap bg-purple-950 text-white shadows'>
            <div className='size py-[6rem] flex flex-col  md:pl-[5rem]  items-start gap-[1rem]'>
                <h1  className=' font-title  text-[3rem] sm:text-[4rem] md:text-[5rem] font-normal'>
                Discover Stories
                </h1>
                <p className='w-full md:w-[31rem] text-[1.3rem] md:text-[1.5rem]  leading-7'>Write, share, and connect while exploring tools to inspire, create, and grow your voice!</p>
                <button className='btn bg-white text-violet-950 rounded-full !text-[1.2rem] !px-6 !mt-[2.5rem] '>Muse More</button>
            </div>
            <img src={typewriter} alt="" />
        </div>
    </div>
  )
}

export default Banner