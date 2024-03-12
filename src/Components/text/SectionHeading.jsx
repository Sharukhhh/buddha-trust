import React from 'react'

const SectionHeading = ({heading , subArea}) => {
  return (
    <>
        <h2 className='text-black text-3xl font-bold font-sans'>
            {heading} <span className='text-[#C0E864]'>{subArea}</span>
        </h2>
    </>
  )
}

export default SectionHeading