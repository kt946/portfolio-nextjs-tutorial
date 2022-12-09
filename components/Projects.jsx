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
      tech: 'React JS',
      projectUrl: '/property',
    },
    {
      title: 'Crypto App',
      backgroundImg: cryptoImg,
      tech: 'React JS',
      projectUrl: '/crypto',
    },
    {
      title: 'Netflix App',
      backgroundImg: netflixImg,
      tech: 'React JS',
      projectUrl: '/netflix',
    },
    {
      title: 'Twitch UI',
      backgroundImg: twitchImg,
      tech: 'Next JS',
      projectUrl: '/twitch',
    },
  ];

  return (
    <div
      id='projects'
      className='w-full'
    >
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map((project) => (
            <ProjectItem
              key={project.title}
              title={project.title}
              backgroundImg={project.backgroundImg}
              tech={project.tech}
              projectUrl={project.projectUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
