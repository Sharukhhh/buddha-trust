import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook , FaSquareInstagram , FaXTwitter} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
        <div className='bg-[#033C2B] text-white py-6'>
            <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='space-y-4'>
                    <p className='mb-4 font-thin'>Lorem ipsum dolor sit amet consectetur. Magna integer enim vitae vulputate eu vitae tristique.</p>
                </div>

                <div className='space-y-4'>
                    <h3 className='text-lg font-semibold mb-2'>General</h3>
                    <ul>
                        <li>
                            <Link className='font-thin' to={'/about'}>About us</Link>
                        </li>
                    </ul>
                </div>

                <div className='space-y-4'>
                    <h3 className='text-lg font-semibold mb-2'>Policies</h3>
                    <ul className='font-thin'>
                        <li>Security Safeguards</li>
                        <li>Terms of service</li>
                        <li>Privacy</li>
                        <li>Acessibility</li>
                    </ul>
                </div>

                <div className='space-y-4'>
                    <h3 className='text-lg font-semibold mb-2'>Get in Touch</h3>
                    <ul>
                        <li className='font-thin'>Follow us on social media and stay updated with the latest information about our services</li>
                        <li className='flex items-center space-x-4 mt-4'>
                            <FaFacebook size={20}/>
                            <FaSquareInstagram size={20}/>
                            <FaXTwitter size={20}/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer