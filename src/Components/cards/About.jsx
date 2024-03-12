import React from 'react'
import SectionHeading from '../text/SectionHeading'

const About = ({isAbout , image , heading, subArea , isVision}) => {
  return (
    <>
        <div className='mb-12'>
            <SectionHeading heading={heading} subArea={subArea}/>
            <div className='flex flex-col md:flex-row items-center justify-between mt-3'>
                {isAbout ? (
                    <p className='md:w-3/4 mb-4 md:mb-0 font-medium text-pretty'>
                        Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id.Lorem ipsum dolor sit amet consectetur. 
                        At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id.Sit purus ante dictum in malesuada id.Lorem ipsum dolor sit amet consectetur. 
                        At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id  
                    </p>
                ) : 
                isVision ? (
                    <img src={image} alt="" className='md:w-1/2 h-45 w-40 object-cover shadow-xl hover:scale-90' />
                ) : (
                    <p className='font-medium text-pretty'>
                        Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id.Lorem ipsum dolor sit amet consectetur. 
                        At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id.Sit purus ante dictum in malesuada id.Lorem ipsum dolor sit amet consectetur. 
                        At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id  
                    </p>
                )}
                {isAbout && (
                    <img src={image} alt="" className='md:w-1/4 w-20 h-44  hover:scale-90'/>
                )}

                {isVision && (
                    <p className='md:w-1/2 mb-4 ml-4 md:mb-0 font-medium text-pretty'>
                        Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id.Lorem ipsum dolor sit amet consectetur. 
                        At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id.Sit purus ante dictum in malesuada id.Lorem ipsum dolor sit amet consectetur. 
                        At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id  
                    </p>
                )}
            </div>
        </div>
    </>
  )
}

export default About