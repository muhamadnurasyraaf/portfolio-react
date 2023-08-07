import React from 'react'

const about = () => {
  return (
    <div className='h-screen bg-body mx-[10%]'>
      <h1 className='text-2xl font-mont font-bold'>About Me</h1>
        <div className='text-white font-pop lg:mx-[20%] leading-10 my-10'>
        Greetings! I'm an enthusiastic individual whose heart beats for programming and all things tech-related. My insatiable curiosity has led me down exciting paths, where I've delved into the captivating worlds of ethical hacking, game development, and more. The thrill of unraveling complex code and the art of crafting immersive gaming experiences have become my creative outlets. I'm on a perpetual journey of learning and growth, eager to embrace 
        every opportunity to expand my knowledge and skill set in these captivating domains.
        </div>
       <div className='text-left text-white mt-10'>
        <p className='font-pop text-txt font-bold text-xl overline'>Services that I provide: </p>
        <ul className='font-mon mt-4'>
          <li className='mb-4'> =&gt; Build User Interface</li>
          <li className='mb-4'> =&gt; Develop Backend Features using PHP and Laravel</li>
          <li className='mb-4'> =&gt; Programming Tutoring(Java,PHP and Frontend)</li>
          <li className='mb-4'> =&gt; Develop web apps based on client requests</li>
        </ul>
       </div>
       <div className='text-left text-white mt-10'>
       <p className='font-pop text-txt overline text-xl'>My Abilities</p>
       <p className='font-pop mt-10 font-bold'>Technical Skills : </p>
       <ul className='font-mon mt-4'>
        <li className='mb-4'> =&gt; Programming Languages : Proficient in Java ,PHP and Javascript.Developed a simple desktop game using Unity and C#,showcasing strong object-oriented programming principles.</li>
        <li className='mb-4'> =&gt; Web Development : Created a responsive portfolio website using HTML, CSS and Javascript, focusing on user-friendly design and interactive features.</li>
       </ul>
       <p className='font-pop mt-10 font-bold'>Project Highlights : </p>
       <ul className='font-mon mt-4'>
        <li className='mb-4'> =&gt; Game Development: Led a team of three to design and develop a 2d platformer game.</li>
        <li className='mb-4'> =&gt; Web Development : Designed and built a Food Delivery App , has CRUD features applied using PHP</li>
       </ul>
       </div>
       <a className='font-mon font-bold mt-10 hover:underline' href='my_latest_resume.pdf 'download='my_latest_resume.pdf'>Click Here to download my resume</a>
    </div>
  )
}

export default about
