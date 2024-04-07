'use client'
import React, { useState} from 'react'


const Notify = () => {

    const [notify, setNotify] = useState(true)
    const [email, setEmail] = useState('')
    const [loader, setLoader] = useState(false)


    // @ts-ignore
    const handleNotifyForm = async (event) => {
        event.preventDefault()
        if (email == '') {
            return;
        }
        setLoader(true)
        try {
          const res = await fetch('api/subscriber', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    email
                })
            })

            if (res.ok) {
                setLoader(false)
                const form = event.target;
                form.reset()
                setNotify(false)
            }
        } catch (error) {
            console.log('Error While creating subscription form')
        }
    } 

  return (
    <div className=" flex flex-col justify-center text-center md:text-start space-y-10 px-10 md:space-y-4">
          <h1 className=" text-3xl md:text-5xl font-bold ">Welcome to Africa’s first Low-Cost Pharmacy</h1>
          <h3 className=" text-xl font-light">
          Save up-to 65% on all prescription medications and get access to a registered health care provider all from your phone.
             </h3>
            <p className=' text-lg'>Join our wait-list to get notified when we launch! </p>
         { notify ? (
         <form onSubmit={handleNotifyForm} className=" rounded-full flex px-3 py-2 border ">
             <input onChange={(e) => setEmail(e.target.value) } type="email" placeholder="info@medrack.com" className=" text-lg outline-none w-full" />
             <button className=" flex-none bg-primary px-6 rounded-full py-2 text-white font-semibold">
               <p>NOTIFY ME</p>
             </button>
             
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