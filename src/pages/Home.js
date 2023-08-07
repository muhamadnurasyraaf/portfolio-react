import React, { useContext } from 'react'
import { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { AppContext } from '../AppContext';
import { SkillItem,ProgressBar, Footer } from '../Components';
import { Link } from 'react-router-dom';


const Home = () => {
  const{ opacity, setOpacity, txtOp , setTxtOp } = useContext(AppContext);

 const front = [
  {id: 1, title:'HTML & CSS',level:'Advanced',value:90},
  {id:2, title:'Javascript',level:'Intermediate',value:50},
  {id:3,title:'Bootstrap',level:'Intermediate',value:50},
  {id:4,title:'Tailwind Css',level:'Beginner',value:40},
  {id:5,title:'ReactJs',level:'Beginner',value:35}
 ];

 const back = [
  {id:1,title:'Laravel',level:'Beginner',value:40},
  {id:2,title:'PHP',level:'Advanced',value:78},
  {id:2,title:'Java',level:'Intermediate',value:55},
  {id:2,title:'C#(Unity)',level:'Beginner',value:34}
 ];

 const others = [
  {id:1,title:'Unity',level:'Beginner',value:20},
  {id:2,title:'Linux',level:'Beginner',value:30},
  {id:3,title:'Adobe Premiere Pro',level:'Intermediate',value:55}
 ];


 const study = [
  {school:'Sekolah Kebangsaan Bandar Endau',year:'2010-2014',result:'4A 1B(UPSR)'},
  {school:'Sekolah Menengah Agama Rompin',year:'2015-2021',result:'7A 1B 1C(SPM)'},
  {school:'Uitm Cawangan Johor Kampus Segamat',year:'2021-present',result:'NULL(Diploma in Science Computer)'},
 ];

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
        <div className='my-10'> <p className='font-pop underline md:text-2xl text-xl font-bold text-left'>Skills</p> </div>
        <p className='text-left text-green-200 text-mont font-bold overline mb-5'>FrontEnd</p>
        <div className='text-left flex flex-col gap-4'>
          {front.map((skill)=>(
            <div>
            <SkillItem key={skill.id} name={skill.title} level={skill.level} />
            <ProgressBar value={skill.value}/>
            </div>
          ))}
        </div>
        <p className='text-left text-mont font-bold overline my-5'>BackEnd</p>
        <div className='text-left flex flex-col gap-4'>
          {back.map((skill)=>(
            <div>
            <SkillItem key={skill.id} name={skill.title} level={skill.level} />
            <ProgressBar value={skill.value}/>
            </div>
          ))}
        </div>
       
        <p className='text-left text-yellow-300 text-mont font-bold overline my-5'>Other Soft Skills</p>
        <div className='text-left flex flex-col gap-4'>
          {others.map((skill)=>(
            <div>
            <SkillItem key={skill.id} name={skill.title} level={skill.level} />
            <ProgressBar value={skill.value}/>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-10 md:px-[15%] mb-10'>
            <p className='text-left font-bold text-mont md:text-2xl underline text-xl mb-10'>My Study Background</p>
            <div className='mt-10'>
              {study.map((st)=>(
                <div className='flex m-5 font-pop justify-between'>
                  <div className='text-left '> 
                    <p className='text-txt'>{st.year}</p>
                    <p>{st.school}</p>
                  </div>
                  <div className='font-bold'>
                  {st.result}
                  </div>
                </div>
              ))}
            </div>
      </div>
      <Link className='text-txt font-mon font-bold' to='/projects'>Check out my projects here</Link>
      <Footer/>
    </div>
  )
}




export default Home
