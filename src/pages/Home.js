import React, { useContext } from 'react'
import { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { AppContext } from '../AppContext';


const Home = () => {
  const{ opacity, setOpacity, txtOp , setTxtOp } = useContext(AppContext);

  useEffect(() => {
    window.addEventListener("load", () => {

      setTimeout(()=>{
        setOpacity(1);
      },1000);
     
      setTimeout(()=>{
        setTxtOp(1);
      },300);
    });
  }, []);
  return (
    <div className='h-screen bg-body text-white'>
      <div className='px-8 flex justify-center gap-4 flex-wrap items-center sm:mt-[17%] mt-8'>
        <img style={{ opacity }} src='asy.jpg' alt='asy.jpg' className='md:w-1/12 w-1/2 rounded-full transition-opacity duration-1000 ease-in-out' />
        <div  className='flex md:leading-10 flex-col transition-opacity duration-1000 ease-in'>
          <p style={{ opacity:txtOp }} className='md:text-left overline font-pop transition-opacity duration-1000 ease-linear' >Full Stack Developer</p>
          <p  className='font-mon font-bold text-xl lg:text-4xl'>Hi My Name is Muhamad Nur <span className='text-txt'>Asyraaf</span></p>

          <div className='lg:text-4xl text-xl font-bold font-mon '>
          I'm a
          <span className='text-txt'>
              <Typewriter 
              options={{ 
                autoStart:true,
                loop:true,
                delay:40,
                strings:[
                  "Student",
                  "Full Stack Developer",
                  "Game Development Enthusiast",
                ],
              }}
            />
          </span>
           
          </div>
          <p style={{ opacity }} className='font-mont transition-opacity duration-1000 ease-out'>"Crafting Code & Chasing Dreams"</p>
        </div>
      </div>

      <div className='md:mt-[19%] mt-[10%] mb-5'>
          <p className='md:text-4xl font-mon text-2xl overline'>About Me</p>
      </div>

      <div className='bg-grey md:px-[15%] pt-10 pb-10'>
          <div className='my-10'> <p className='font-pop underline text-2xl  text-left'>Skills</p> </div>
          <div className='grid grid-cols-4 gap-4 content-center'>
               <div className='flex flex-col flex-1 gap-2 items-center'>
                  <img  src='icons/html-5.png' alt='html-5.png'/>
                  <p>HTML</p>
                  <p className='overline text-txt'>Advanced</p>
                    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                      <div class="bg-[#66FFB2] w-2/3 text-xs font-medium text-black text-center p-0.5 leading-none rounded-full"> 75%</div>
                    </div>
               </div>
               <div className='flex flex-col gap-2 items-center'>
                  <img src='icons/css-3.png' alt='css-3.png'/>
                  <p>CSS</p>
                  <p className='overline text-txt'>Advanced</p>
                  <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div class="bg-[#66ffb2] w-2/3 text-xs font-medium text-black text-center p-0.5 leading-none rounded-full"> 70%</div>
                </div>
               </div>
               <div className='flex flex-col gap-2 items-center'>
                  <img className='w-1/3' src='icons/tailwind-css.svg' alt='tailwind-css.svg'/>
                 
               </div>
               <div className='flex flex-col gap-2 items-center'>
                  <img className='w-1/3' src='icons/bootstrap.png' alt='bootstrap.png'/>
                
               </div>
               <div className='flex flex-col gap-2 items-center'>
                  <img src='icons/js.png' alt='js.png'/>
                
               </div>
               <div className='flex flex-col gap-2 items-center'>
                  <img src='icons/react.png' alt='react.png'/>
                </div>
               <div className='flex flex-col gap-2 items-center'>
                  <img src='icons/php.png' alt='php.png'/>
                  
               </div>
               <div className='flex flex-col gap-2 items-center'>
                  <img src='icons/mysql.png' alt='mysql.png'/>
                 
               </div>
               <div className='flex flex-col gap-2 items-center'>
                  <img src='icons/laravel.svg' alt='laravel.svg'/>
                  
               </div>

          </div>
      </div>
    </div>
  )
}




export default Home
