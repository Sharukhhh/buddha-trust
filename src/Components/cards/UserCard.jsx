import React from 'react'

const UserCard = ({image , username , isHome}) => {
  return (
    <>
        <div className='max-w-xs mx-auto mb-8 md:max-w-none md:w-1/4 md:mx-0 md:mb-0 md:px-2 hover:scale-95'>
            <div className='relative'>
                <img src={image} alt=""  className="w-full h-auto rounded-lg object-cover shadow-lg" style={{ width: '295px', height: '330px'}} />
                {!isHome ? (
                    <div className='absolute bottom-0 left-0 right-0 bg-white py-2 px-4 text-center'>
                      <p className='text-black font-semibold'>{username}</p>
                    </div>
                ) : (
                  <div className='absolute bottom-0 left-0 right-0 text-left bg-white py-6 px-3'>
                    <p className='text-bold text-orange-500 font-sans tracking-wide '>Help us to send food</p>
                    <div className='relative my-4'>
                      <div className='absolute left-0 bottom-0 w-3/4 h-1 bg-orange-500'></div>
                      <div className='absolute left-3/4 bottom-0 w-1/4 h-1 bg-gray-400'></div>
                    </div>
                    <p>100%</p>
                  </div>
                )}
            </div>
        </div>
    </>
  )
}

export default UserCard