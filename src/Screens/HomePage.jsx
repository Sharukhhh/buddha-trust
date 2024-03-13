import React from 'react'
import NavBar from '../Components/navbar/NavBar'
import Footer from '../Components/footer/Footer'
import buddha from '../../public/buddha.png'
import Stats from '../Components/cards/Stats'
import Intro from '../Components/cards/Intro'
import Motive from '../Components/cards/Motive'
import Activity from '../Components/cards/Activity'
import volunteer from '../../public/volunteer.png'
import fund from '../../public/fund.png'
import share from '../../public/share.png'
import UserCard from '../Components/cards/UserCard'
import food from '../../public/food.jpg';
import clothes from '../../public/clothes.jpg';
import education from '../../public/education.jpg';
import medicine from '../../public/medicine.jpg';


const HomePage = () => {
  return (
    <>
        <NavBar/>
        <div className='bg-gradient-to-b from-[#a8ebc0] bg-opacity-50 mb-20 to-white'>
            <div className='max-w-7xl mx-auto px-4 py-7 flex flex-col md:flex-row justify-between items-center sm:px-6 lg:px-8'>
                <div className='text-center md:text-left'>
                    <h1 className='text-6xl font-bold mb-4'>
                        Make someone’s Life by giving of yours
                    </h1>
                    <p className='text-lg mb-6'>
                        Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id.Lorem   
                    </p>
                    <button className='rounded-full px-4 py-3 bg-black text-white'>Donate Now</button>
                </div>

                <div className='mt-10'>
                    <img src={buddha} alt="" className='w-full max-w-3xl'/>
                </div>
            </div>
        </div>
        <Stats/>

        <div className='bg-gradient-to-t py-8 from-[#a8ebc0] bg-opacity-50  to-white'>
            <Intro/>

            <Motive isFirst={true}/>
            <Motive isFirst={false}/>

            <div className='mt-10 text-center'>
                <h2 className='font-bold text-2xl text-black'>
                    We Believe that We can Save More Life’s with you
                </h2>
            </div>

            <div className='py-10 flex flex-wrap mx-auto'>
                <Activity
                image={volunteer}
                heading={'Become Volunteer'}
                />
                <Activity
                image={fund}
                heading={'Quick Fundraise'}
                />
                <Activity
                image={share}
                heading={'Start Donating'}
                />
            </div>

            <div className='my-4 text-center text-black'>
                <h2 className='font-bold text-2xl'>
                    Join our community for donating and be a part of a positive change in the world. With over
                </h2>

                <h2 className=' mt-10 font-mono text-6xl'>
                    130,987 +
                </h2>
                <p className='text-xl italic'>People  already joined</p>
            </div>

            <div className='text-center mt-20'>
                <h2 className='font-bold text-2xl text-black '>Our Campaigns</h2>
            </div>

            <div className='flex my-9 flex-wrap mx-auto '>
                <UserCard image={food} username={'Food'} isHome={true}/>
                <UserCard image={clothes} username={'Clothes'} isHome={true}/>
                <UserCard image={education} username={'Education'} isHome={true}/>
                <UserCard image={medicine} username={'Medicine'} isHome={true}/>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default HomePage