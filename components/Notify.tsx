'use client'
import React, { useState} from 'react'


const Notify = () => {

    const [notify, setNotify] = useState(true)
    const [email, setEmail] = useState({email: ''})

    const formChange = (event: any) => {
        const { value } = event.target
        setEmail({email: value})
        console.log(email)
    }
    const handleNotifyForm = (event: any) => {
        event.preventDefault()
        if (email.email == '') {
            return
        }
        console.log(email)
        setNotify(false)
    }

  return (
    <div className=" flex flex-col justify-center text-center md:text-start space-y-10 px-10 md:space-y-4">
          <h1 className=" text-3xl md:text-5xl font-bold ">Welcome to Africa’s first Low-Cost Pharmacy</h1>
          <h3 className=" text-xl font-light">Join our Wait list to be notified when we launch ✈️ </h3>
         { notify ? (
         <form onSubmit={handleNotifyForm} className=" p-3 flex  rounded-md border border-emerald-300 bg-white ">
             <input onChange={formChange} type="email" placeholder="info@medrack.com" className=" text-lg outline-none w-full" />
             <button className=" flex-none bg-primary px-6 rounded-md py-2 text-white font-semibold">NOTIFY ME</button>
        </form>
         ) :
            (
                <p className=' text-2xl font-semibold text-primary'>Thanks for your subscriptions. </p>
            )
         }
    </div>
  )
}

export default Notify