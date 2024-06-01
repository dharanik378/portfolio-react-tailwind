import React from 'react'

import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import nodejs from '../assets/nodejs.png'
import mongodb from '../assets/mongodb.png'
import flutter from '../assets/flutter.png'
import firebase from '../assets/firebase.png'

const Skills = () => {
  return (
    <div className=' border border-gray-600  bg-black text-gray-400 md:h-[150px] max-w-[1200px] 
    mx-auto grid grid-cols-4 place-items-center md:flex md:justify-between md:items-center '> 

    <h2 className='text-gray-700 text-xl md:text-4xl font-bold m-4'>
        My <br /> Tech <br /> Stack
    </h2>

    <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={javascript} alt="" width={90} height={80}/>
        <p className='mt-2'>JavaScript</p>
    </div>
    <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={react} alt="" width={100} height={100}/>
        <p className='mt-2'>React</p>
    </div>
    <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[80px]'>
        <img src={nodejs} alt="" width={100} height={100}/>
        <p className='mt-2'>Node.js</p>
    </div>
    <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={mongodb} alt="" width={100} height={90}/>
        <p className='mt-2'>MongoDb</p>
    </div>
    <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={tailwind} alt="" width={100} height={100}/>
        <p className='mt-2'>Tailwind</p>
    </div>
    
    <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={flutter} alt="" width={85} height={85}/>
        <p className='mt-2'>Flutter</p>
    </div>
    
    <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={firebase} alt="" width={100} height={100}/>
        <p className='mt-2'>Firebase</p>
    </div>
    

    </div>
    
  )
}

export default Skills

