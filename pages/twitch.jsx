import Image from 'next/image';
import React from 'react';
import twitchImg from '../public/assets/projects/twitch.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const twitch = () => {
  const techList = ['React', 'Tailwind', 'JavaScript', 'Firebase', 'Google API', 'Zillow API'];

  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1'
          fill
          style={{ objectFit: 'cover' }}
          src={twitchImg}
          alt=''
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Twitch UI</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur cumque debitis
            alias? Cum, doloremque sapiente dolorum quibusdam asperiores nostrum totam voluptas
            similique enim repellat! Vitae, veritatis. Animi autem at eius! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Excepturi eligendi, eum eaque itaque voluptas hic
            assumenda voluptatum officiis repudiandae possimus aperiam ut quam maxime accusamus,
            temporibus fuga commodi aspernatur quaerat?
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

export default twitch;
