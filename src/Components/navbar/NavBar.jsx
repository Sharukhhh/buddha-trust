import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <nav className='bg-white shadow-lg p-2'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex flex-wrap items-center justify-center my-3 h-16 font-semibold md:my-1 md:justify-around'>
                    <div className='flex justify-center w-full md:w-auto mb-2 md:mb-0'>
                        <ul className='flex flex-wrap space-x-10 md:space-x-7'>
                            <li>
                                <Link to={'/'} className='className="text-black hover:text-gray-800"'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to={'/about'} className='className="text-black hover:text-gray-800"'>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to={'/contact'} className='className="text-black hover:text-gray-800"'>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='flex items-center space-x-4'>
                        <button className='bg-white text-black py-2 px-5 md:px-5 rounded-full border border-black'>
                            Donate
                        </button>
                        <button className='bg-black text-white py-2 px-5 md:px-5 rounded-full'>
                            Sign in
                        </button>
                    </div>
                </div>    
            </div>
        </nav>
    </>
  )
}

export default NavBar