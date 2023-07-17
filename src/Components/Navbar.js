import React from 'react'
import { NavLink,Link } from 'react-router-dom';
import { useState , useEffect } from 'react';

const Navbar = () => {
  const [opacity,setOpacity] = useState(0);
  const [padding,setPadding] = useState("0");
  useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(()=>{
        setOpacity(1);

      },300);
      setTimeout(()=>{
        setPadding("2em");
      },1000);
    });
  }, []);
  return (
    <nav  style={{ opacity ,paddingTop:padding,paddingBottom:padding}} className='bg-body text-white font-pop font-bold flex gap-6 justify-end transition-all pr-6 duration-300 ease-in  align-center flex-wrap' >
        <div className='font-mont md:mt-2 font-bold'>
          Muhamad Nur <span className='text-txt'>Asyraaf</span>
        </div>
        <ul className='flex md:gap-4 gap-2 items-center'>
            <li>
              <NavLink className='hover:text-txt transition-all duration-300 flex' to='/'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              Home
              </NavLink>
            </li>
            <li>
              <NavLink className='hover:text-txt transition-all duration-300 flex' to='/about'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              About
              </NavLink>
            </li>
            <li>
              <NavLink className='hover:text-txt transition-all duration-300 flex' to='/contact'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Contact
              </NavLink>
            </li>
            <li>
              <NavLink className='hover:text-txt transition-all duration-300 flex' to='/projects'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
              </svg>
              Projects
              </NavLink>
            </li>
        </ul>
        <div className='px-4 py-2 bg-txt text-white rounded hover:bg-black hover:text-txt transition-all duration-300'>
          <Link to='/' className='btn text-base lg:text-sm xl:text-xs'>Hire Me</Link>
        </div>
    </nav>
  )
}

export default Navbar