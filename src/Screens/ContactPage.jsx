import React from 'react'
import NavBar from '../Components/navbar/NavBar'
import Footer from '../Components/footer/Footer'
import SectionHeading from '../Components/text/SectionHeading'
import ContactForm from '../Components/forms/ContactForm'
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";


const ContactPage = () => {
  return (
    <>
        <NavBar/>
        <div className='bg-gradient-to-b from-[#a8ebc0] bg-opacity-50 mb-20 to-white'>
            <div className='text-center py-9'>
                <SectionHeading heading={'Contact'} subArea={'Us'}/>

                <h3 className=' mt-6 text-4xl font-bold text-black'>
                    What can we help you with?
                </h3>
            </div>

            <div className='mb-14 flex justify-center'>
                <input type="text" name="" id="" 
                placeholder='Search here...'
                className='w-64 px-10 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-green-500'
                />
                <button className='px-6 py-2 bg-[#C0E864] text-black font-semibold rounded-r-full focus:outline-none'>
                    Search
                </button>
            </div>

            <div className='bg-black bg-opacity-70 text-white mx-6 py-8'>
                <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between'>
                    <div className='flex flex-col justify-center  space-y-6 lg:w-1/2 lg:pr-8 mb-6'>
                        <div className='flex items-center space-x-4'>
                            <FiPhone size={25} className='text-[#C0E864]'/>
                            <div>
                                <h4 className='font-semibold text-xl text-[#C0E864]'>Call Us</h4>
                                <p>+91 9234567899</p>
                            </div>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <CiLocationOn size={25} className='text-[#C0E864]'/>
                            <div>
                                <h4 className='font-semibold text-xl text-[#C0E864]'>Location</h4>
                                <p>Workingdom, Plot No 17,</p>
                                <p>Sector-7, Palam Extension, Dwarka,</p>
                                <p>New Delhi-110075 India</p>
                            </div>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <MdOutlineMail size={25} className='text-[#C0E864] '/>
                            <div>
                                <h4 className='font-semibold text-xl text-[#C0E864]'>Email</h4>
                                <p>Buddha@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <ContactForm/>
                </div>
            </div>

        </div>
        <Footer/>
    </>
  )
}

export default ContactPage