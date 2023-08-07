import React from 'react';

const projectsData = [
  {
    id: 1,
    title: 'DocMent',
    description: 'Doctor Appoinment Booking System using OOP principle in PHP',
    imageUrl: '/project-img/docment.png',
    link: 'https://github.com/muhamadnurasyraaf/docment',
  },
  {
    id: 2,
    title: 'SpiceBoy',
    description: 'Food Delivery App using procedural PHP',
    imageUrl: '/project-img/spiceboy.png',
    link: 'https://github.com/muhamadnurasyraaf/Food-delivery-system-in-php',
  },
  {
    id:3,
    title: 'Blog Page',
    description: 'Blog page basic CRUD using Laravel framework',
    imageUrl: '/project-img/blog.png',
    link:'https://github.com/muhamadnurasyraaf/first-laravel-project'
  },
  {
    id:4,
    title:'Portfolio(this website)',
    description:'Static Website using reactjs',
    imageUrl:'/project-img/portfolio.png',
    link:'https://github.com/muhamadnurasyraaf/portfolio-react'
  }

];

function Project() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-white font-bold mb-10">My Projects</h1>
      <div className="flex flex-wrap justify-center">
        {projectsData.map((project) => (
          <div key={project.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img className="w-full" src={project.imageUrl} alt={`Project ${project.id}`} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{project.title}</div>
              <p className="text-slate-300 text-base">{project.description}</p>
            </div>
            <div className="px-6 py-4">
              <a
                href={project.link}
                target='_blank'
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
