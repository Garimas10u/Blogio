import React, {useState} from 'react'
import Modal from '../../../utils/Modal'
import { LiaTimesSolid } from "react-icons/lia"; 
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import SignIn from './SignIn';
import SignUp from './SignUp';

const Auth = () => {
    const [createUser, setCreateUser] = useState(false);
    const [signReq, setSignReq]=useState("");
    const [modal , setModal]=useState(true);

    const hidden= modal ? "visible opacity-100": "inivisible opacity-0"; 

  return (
    <Modal modal={modal} setModal={setModal} hidden={hidden}>
        <section className={`z-50 rounded-xl fixed top-[3rem] bottom-[2rem] left-0 overflow-auto md:left-[10rem] right-0 md:right-[10rem] bg-purple-100 shadows
        transition-all duration-500 ${hidden}
        `}>
            <button 
            onClick={()=> setModal(false)}
            className='absolute top-8 right-8 text-2xl hover:opacity-50'>< LiaTimesSolid /></button>
            <div className='flex flex-col justify-center items-center gap-[3rem]'>
                {signReq=== "" ?(
                    <>
                    <h2 className='text-2xl text-violet-950 pt-[5rem]'>
                        {createUser? "Get Started with Blogio": "Welcome Back to Blogio"}
                    </h2>
                    <div className='flex flex-col gap-4 w-fit mx-auto'>
                        <Button icon={<FcGoogle className='text-xl'/>}
                        text={`${createUser? "Sign Up ":"Sign In "}with Google`}
                        />
                        <Button icon={<MdFacebook className='text-xl text-blue-600'/>}
                        text={`${createUser? "Sign Up ":"Sign In "}with Facebook`}
                        />
                        <Button
                        click= {()=> setSignReq(createUser ? "sign-up": "sign-in")}
                        icon={<AiOutlineMail className='text-xl text-slate-800'/>}
                        text={`${createUser? "Sign Up ":"Sign In "}with Email`}
                        />
                    </div>
                    <p> {createUser ? "Already have an account ": "No Account "}
                        <button 
                        onClick={()=>setCreateUser(!createUser)}
                        className=' font-semibold text-violet-900  hover:text-violet-950'>{createUser ? " Sign In" : "Create One"}</button>
                    </p>
                    </>
                ):signReq === "sign-in"? (
                    <SignIn setSignReq={setSignReq} />
                ):signReq ==="sign-up"? (
                    <SignUp setSignReq={setSignReq} />
                ):null}
                <p className='md:w-[30rem] mx-auto text-center text-sm mb-[3rem]'>
                    Click "Sign in" to agree to Blogio's terms of services. Experience the joy of reading and writing blogs.
                </p>
            </div>
        </section>
    </Modal>
  )
}

export default Auth;

const Button=({icon, text, click})=>{
    return(
        <button
        onClick={click}
         className='flex items-center gap-10 sm:w-[20rem] border border-violet-950 px-3 py-2 rounded-full'>
            {icon}{text}
        </button>
    )
}