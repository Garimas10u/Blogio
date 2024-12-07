import React from 'react'

const Input = ({type, title}) => {
  return (
    <div className='flex flex-col items-center gap-2'>
        <label className='text-sm capitalize'>{title}</label>
        <input  className=' w-[20rem] rounded-md border-violet-900 bg-white py-1' 
        type={type}
        name={title}
        />
    </div>
  )
}

export default Input