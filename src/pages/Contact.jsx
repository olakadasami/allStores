import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [contact, setContact] = useState([])



    const submitHandler = (e) => {
      e.preventDefault()

      setContact([
        ...contact, {
          name, email, message, id: uuid()
        }
      ])

      setName('')
      setEmail('')
      setMessage('')
    }

  return (
      <form className='text-white rounded bg-primary w-4/5 sm:w-3/5 md:w-2/5 px-5 py-10 md:p-10 mx-auto mt-10' onSubmit={submitHandler} >

        <h2 className='mb-8'>Tell us what you need..</h2>

        <input 
         type="text" 
         className='rounded text-primary w-full mb-8 p-2 block'
         required
         placeholder='Full Name'
         value={name}
         onChange={(e => setName(e.target.value))} 
        />

        <input 
         type="email" 
         className='w-full text-primary rounded mb-8 p-2 block'
         required 
         value={email} 
         placeholder="Email"
         onChange={(e => setEmail(e.target.value))} 
        />

        <textarea
         className='w-full text-primary rounded mb-8 p-2 block'
         required 
         placeholder='Message'
         value={message} 
         onChange={(e => setMessage(e.target.value))} 
        />

        <button className='bg-secondary text-white px-4 py-3 rounded'>Send</button>

      </form>
  )
}

export default Contact;