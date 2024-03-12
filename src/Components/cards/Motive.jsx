import React from 'react'
import kids from '../../../public/kids.jpg'

const Motive = ({isFirst}) => {
  return (
    <div className='flex py-10 flex-col lg:flex-row items-center justify-center lg:justify-between'>
        {isFirst ? (
            <div className='lg:w-1/2 flex flex-col items-center justify-center mb-4 lg:mb-0 lg:mr-4'>

            </div>
        ) : (
            <div className='lg:w-1/2 flex flex-col items-center my-4 ms-8 justify-center mb-4 lg:mb-0 lg:mr-4'>
                <div>
                    <h2 className='text-2xl font-bold mb-2'>Great futures are built with a small trust</h2>
                    <p className='mb-4'>Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id.Lorem</p>
                    <button className='rounded-full px-4 py-3 bg-black text-white'>Donate Now</button>
                </div>
            </div>
        )}

        {isFirst ? (
            <div className='lg:w-1/2 flex flex-col me-8 my-4 items-center justify-center'>
                <div>
                    <h2 className='text-2xl font-bold mb-2'>No More Homeless, No More Hunger</h2>
                    <p className='mb-4'>Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id.Lorem</p>
                    <button className='rounded-full px-4 py-3 bg-black text-white'>Donate Now</button>
                </div>
            </div>
        ) : (
            <div className='lg:w-1/2 flex flex-col my-4 items-center justify-center'>
                <img src={kids} alt="" className='shadow-black shadow-lg me-8 h-72 w-100'/>
            </div>
        )}
    </div>
  )
}

export default Motive