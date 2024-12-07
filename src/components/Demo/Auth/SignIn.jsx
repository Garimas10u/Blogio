import React from 'react'
import Input from '../../../utils/Input'
import { MdKeyboardArrowRight } from 'react-icons/md'

const SignIn = ({setSignReq}) => {
  return (
    <div className='size mt-[6rem] text-center '>
        <h2 className='text-3xl text-violet-950'>Sign In with Email</h2>
        <p className='w-full sm:w-[25rem] mx-auto py-[2rem]' >
            Enter the email address associated with your account to get a sign-in link in your inbox.
        </p>
        <form className='flex flex-col gap-4' >
            <Input type="email" title="email" />
            <Input type="password" title="password" />
            <button className='px-8 py-2 text-sm rounded-full bg-violet-950 hover:bg-violet-900 text-white w-fit mx-auto'>Sign In</button>
        </form>
        <button 
        onClick={()=> setSignReq("")}
        className=' mt-5 text-sm text-violet-950 font-semibold flex items-center mx-auto '>
             All Sign In Options <MdKeyboardArrowRight/>
        </button>
    </div>
  )
}

export default SignIn