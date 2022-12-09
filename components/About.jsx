import React from 'react';

const About = () => {
  return (
    <div
      id='about'
      className='w-full md:h-screen p-2 flex items-center py-16'
    >
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <p className='py-2 text-gray-600'>
            Saepe repellendus mollitia ab, earum error fugit soluta enim tempora consequuntur. Quos
            libero reprehenderit voluptate? Sequi soluta autem maxime numquam dolor consequatur?
            Ornare aenean euismod elementum nisi quis eleifend.
          </p>
          <p className='py-2 text-gray-600'>
            Sagittis eu volutpat odio facilisis mauris sit. Lorem ipsum dolor sit amet consectetur
            adipiscing elit. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Amet aliquam
            id diam maecenas ultricies mi. Cursus sit amet dictum sit amet justo donec enim.
            Venenatis a condimentum vitae sapien pellentesque habitant morbi. Nam libero justo
            laoreet sit amet cursus.
          </p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>
            Check out some of my latest projects
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img
            className='rounded-xl'
            src='/assets/about.jpg'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
