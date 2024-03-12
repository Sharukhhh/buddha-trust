import React from 'react'

const Activity = ({image , heading}) => {
  return (
    <div className='max-w-xs text-black  mx-auto mb-8 md:max-w-none md:w-1/4 md:mx-auto md:mb-0 md:px-2 hover:scale-95'>
        <div className='bg-white p-4 shadow-black shadow-md items-center rounded-lg'>
            <img src={image} alt="" className='h-20 w-20 mb-4 object-cover' />
            <h3 className='text-xl font-bold'>{heading}</h3>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id.Lorem</p>
        </div>    
    </div>
  )
}

export default Activity