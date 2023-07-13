import React from 'react'
import { NavLink,Link } from 'react-router-dom';
import { useState , useEffect } from 'react';

const Navbar = () => {
  const [Justify, setJustify] = useState("flex-start");
  useEffect(() => {
    window.addEventListener("load", () => {
      setJustify("flex-end");
    });
  }, []);
  return (
    <nav  style={{ justifyContent: Justify}} className='bg-body text-white font-pop font-bold flex gap-6 transition-all duration-1000 align-center p-6 flex-wrap' >
        <div className='font-mont font-bold'>
          Muhamad Nur <span className='text-txt'>Asyraaf</span>
        </div>
        <ul className='flex gap-2'>
            <li>
              <NavLink className='hover:text-txt transition-all duration-300' to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink className='hover:text-txt transition-all duration-300' to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink className='hover:text-txt transition-all duration-300' to='/'>Contact</NavLink>
            </li>
            <li>
              <NavLink className='hover:text-txt transition-all duration-300' to='/'>Projects</NavLink>
            </li>
        </ul>
        <div className='px-4 py-2 bg-txt text-white rounded hover:bg-black hover:text-txt transition-all duration-300'>
          <Link to='/' className='btn text-base lg:text-sm xl:text-xs'>Hire Me</Link>
        </div>
    </nav>
  )
}

export default Navbar