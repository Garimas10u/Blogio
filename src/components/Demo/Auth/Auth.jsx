import React from 'react'
import Modal from '../../../utils/Modal'
import { LiaTimesSolid } from "react-icons/lia"; 

const Auth = () => {
  return (
    <Modal>
        <section className='z-50 fixed top-[2rem] bottom-[2rem] left-0 overflow-auto md:left-[10rem] right-0 md:right-[10rem] bg-purple-100 shadows'>
            <button>< LiaTimesSolid /></button>
        </section>
    </Modal>
  )
}

export default Auth