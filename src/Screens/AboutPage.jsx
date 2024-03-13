import React from 'react'
import NavBar from '../Components/navbar/NavBar'
import Footer from '../Components/footer/Footer'
import About from '../Components/cards/About'
import buddha from '../../public/buddha.png'
import vision from '../../public/vision.jpg'
import UserCard from '../Components/cards/UserCard';
import p1 from '../../public/p1.jpg'
import p2 from '../../public/p2.jpg'
import p3 from '../../public/p3.jpg'
import p4 from '../../public/p4.jpg'
import { FaSlash } from 'react-icons/fa6'


const AboutPage = () => {
  return (
    <>
        <NavBar/>
        <div className='bg-gradient-to-b from-[#a8ebc0] bg-opacity-50 to-white'>
            <div className='max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8'>
                <About 
                isAbout={true} 
                isVision={false}
                image={buddha}
                heading={'About'}
                subArea={'Us'}
                />
                <About 
                isAbout={false} 
                isVision={false}
                heading={'Our'}
                subArea={'Story'}
                />
                <About 
                isAbout={false} 
                isVision={true}
                image={vision}
                heading={'Our'}
                subArea={'Vision'}
                />
                <About 
                isAbout={false} 
                isVision={false}
                heading={'Who'}
                subArea={'We Are'}
                />
                <About 
                isAbout={false} 
                isVision={false}
                heading={'Our'}
                subArea={'Team'}
                />

                <div className='flex flex-wrap -mx-3'>
                    <UserCard image={p1} username={'Rahul'} isHome={false}/>
                    <UserCard image={p2} username={'Isha'} isHome={false}/>
                    <UserCard image={p3} username={'Priya'} isHome={false}/>
                    <UserCard image={p4} username={'Jackson'} isHome={false}/>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default AboutPage