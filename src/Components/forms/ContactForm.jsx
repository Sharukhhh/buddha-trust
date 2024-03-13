import React from 'react'

const ContactForm = () => {
  return (
    <>
        <form className='bg-white p-9 lg:w-1/2 lg:pl-8'>
            <input type="text" name="name" placeholder='Name' required
            className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500'
            />
            <input type="text" name="email" placeholder='Email' required
            className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500'
            />
            <input type="text" name="phone" placeholder='Phone number' required
            className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500'
            />
            <textarea name="message" 
            placeholder='message'
            required
            className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500'
            ></textarea>

            <button className='px-4 py-2 items-center font-semibold rounded-full bg-black text-white'>Submit</button>
        </form>
    </>
  )
}

export default ContactForm