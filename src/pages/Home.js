import React from 'react'
import { useState , useEffect } from 'react';
const Home = () => {

  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    window.addEventListener("load", () => {
      setOpacity(1);
    });
  }, []);
  return (
    <div className='h-screen bg-body text-white'>
      <div className='px-8 flex justify-center gap-4 flex-wrap items-center pt-20'>
        <img src='asy.jpg' alt='asy.jpg' className='lg:w-1/12 w-1/2 rounded-full transition-opacity duration-1000 ease-in-out' style={{ opacity }}/>
        <div className='flex md:leading-10 flex-col'>
          <p className='md:text-left overline font-pop'>Full Stack Developer</p>
          <p className='font-mon font-bold text-xl lg:text-4xl'>Hi My Name is Muhamad Nur <span className='text-txt'>Asyraaf</span></p>
          <p className='lg:text-4xl text-xl font-bold font-mon '>I am a <span className='line-through text-txt'>Full Stack Developer</span> Student</p>
          <p className='font-mon'>"Crafting Code & Chasing Dreams"</p>
        </div>
       
      </div>
    </div>
  )
}




export default Home
