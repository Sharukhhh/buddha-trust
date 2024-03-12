import React from 'react'

const Stats = () => {
  return (
    <>
        <div className='bg-black py-14'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-around'>
                <div className='text-center mb-8 sm:mb-0 sm:mr-4'>
                    <h2 className='text-3xl font-bold text-[#C0E864]'>10K+</h2>
                    <p className='text-sm text-white'>Children are back to school</p>
                </div>
                <div className='text-center mb-8 sm:mb-0 sm:mr-4'>
                    <h2 className='text-3xl font-bold text-[#C0E864]'>2M+</h2>
                    <p className='text-sm text-white'>Total money donated</p>
                </div>
                <div className='text-center sm:mb-0 sm:ml-4'>
                    <h2 className='text-3xl font-bold text-[#C0E864]'>100+</h2>
                    <p className='text-sm text-white'>Hospital has been built</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Stats