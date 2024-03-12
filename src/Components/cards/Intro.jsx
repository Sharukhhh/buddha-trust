import React from 'react'
import { BsEmojiSmile , BsSuitHeart , BsPeople } from "react-icons/bs";


const Intro = () => {
  return (
    <div className='max-w-5xl mx-auto bg-[#C0E864] py-14 rounded-lg'>
        <div className='text-center'>
            <h4 className='text-2xl font-bold text-black'>
            Fundraising on Buddha Trust takes just a few minutes
            </h4>
        </div>

        <div className='flex md:flex-row text-center flex-col mt-8'>
            <div className='mx-4 flex flex-col items-center justify-center mb-4 sm:mb-0 sm:mr-4'>
                <BsEmojiSmile size={80} className='bg-white p-2 rounded-full mb-2'/>
                <h4 className='text-lg font-bold'>Give Happiness</h4>
                <p className='text-sm'>Giving happiness to others is one of the most fulfilling things you can do in life.</p>
            </div>
            <div className='mx-4 flex flex-col my-4 items-center justify-center sm:mb-0 sm:mr-4'>
                <BsSuitHeart size={80} className='bg-white p-2 rounded-full mb-2'/>
                <h4 className='text-lg font-bold'>Share Love</h4>
                <p className='text-sm'>When you share love with those around you, you create a ripple effect of kindness</p>
            </div>
            <div className='mx-4 flex flex-col my-4 items-center justify-center sm:mb-0 sm:mr-4'>
                <BsPeople size={80} className='bg-white p-2 rounded-full mb-2'/>
                <h4 className='text-lg font-bold'>Build Socially</h4>
                <p className='text-sm'>Building socially requires not just connecting with others, but also actively contributing.</p>
            </div>
        </div>
    </div>
  )
}

export default Intro