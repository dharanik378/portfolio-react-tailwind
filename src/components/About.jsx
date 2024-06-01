import React from 'react'
import aboutImg from '../assets/about.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12 ' id='about'>
      <div className='md:grid md:grid-cols-2 sm:py-16 '>

        <div className='mt-4 md:mt-0 text-left flex '>
          <div className='my-auto mx-6'>
            <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
            <p className='text-base lg:text-lg'>
            Hi, I'm Dharani from Hyderabad. As a tech enthusiast, I specialize in the MERN Stack and have experience with Flutter and Firebase, allowing me to build dynamic web and mobile applications. Beyond my technical expertise, I'm also a professional acrylic artist, bringing a creative flair and an eye for detail to everything I do.
            </p>
          </div>

        </div>
        <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutImg} width={400} height={400} />
      </div>
    </div>
  )
}

export default About