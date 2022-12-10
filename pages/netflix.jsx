import Image from 'next/image';
import React from 'react';
import netflixImg from '../public/assets/projects/netflix.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const netflix = () => {
  const techList = ['React', 'Tailwind', 'JavaScript', 'Firebase', 'Google API', 'Zillow API'];

  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1'
          fill
          style={{ objectFit: 'cover' }}
          src={netflixImg}
          alt=''
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Netflix App</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ut iure a architecto
            itaque, cupiditate eos minus magni ab quis reprehenderit consequuntur, harum quae nulla
            aperiam voluptate culpa! Unde, architecto! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Veniam, officia ullam soluta suscipit laborum quasi incidunt mollitia
            earum perferendis, sint maxime delectus. Obcaecati, doloribus ullam quae sit architecto
            quaerat consequuntur.
          </p>
          <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          <button className='px-8 py-2 mt-4'>Code</button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div>
              {techList.map((tech) => (
                <p
                  className='text-gray-600 py-2 flex items-center'
                  key={tech}
                >
                  <RiRadioButtonFill className='pr-1' />
                  {tech}
                </p>
              ))}
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default netflix;
