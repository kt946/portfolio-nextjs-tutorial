import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg';
import netflixImg from '../public/assets/projects/netflix.jpg';
import twitchImg from '../public/assets/projects/twitch.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {
  const projects = [
    {
      title: 'Property Finder',
      backgroundImg: propertyImg,
      projectUrl: '/property',
    },
    {
      title: 'Crypto App',
      backgroundImg: cryptoImg,
      projectUrl: '/crypto',
    },
    {
      title: 'Netflix',
      backgroundImg: netflixImg,
      projectUrl: '/netflix',
    },
    {
      title: 'Twitch',
      backgroundImg: twitchImg,
      projectUrl: '/twitch',
    },
  ];

  return (
    <div className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map((project) => (
            <ProjectItem
              key={project.title}
              title={project.title}
              backgroundImg={project.backgroundImg}
              projectUrl={project.projectUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
