import React from 'react'

const UserCard = ({image , username}) => {
  return (
    <>
        <div className='max-w-xs mx-auto mb-8 md:max-w-none md:w-1/4 md:mx-0 md:mb-0 md:px-2 hover:scale-95'>
            <div className='relative'>
                <img src={image} alt=""  className="w-full h-auto rounded-lg object-cover shadow-lg" style={{ width: '295px', height: '330px'}} />
                <div className='absolute bottom-0 left-0 right-0 bg-white py-2 px-4 text-center'>
                    <p className='text-black font-semibold'>{username}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserCard