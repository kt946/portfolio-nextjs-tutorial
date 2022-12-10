import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router = useRouter();

  const navLinks = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/#about',
    },
    {
      name: 'Skills',
      link: '/#skills',
    },
    {
      name: 'Projects',
      link: '/#projects',
    },
    {
      name: 'Contact',
      link: '/#contact',
    },
  ];

  useEffect(() => {
    if (
      router.asPath === '/property' ||
      router.asPath === '/crypto' ||
      router.asPath === '/netflix' ||
      router.asPath === '/twitch'
    ) {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937');
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={`fixed w-full h-20 z-[100] ${shadow ? 'shadow-xl' : ''}`}
    >
      <div className='flex justify-between items-center w-full h-full px-4 2xl:px-16'>
        <Link href='/'>
          <Image
            src='/assets/navLogo.png'
            alt=''
            width={50}
            height={50}
          />
        </Link>
        <div>
          {/* nav links */}
          <ul
            style={{ color: `${linkColor}` }}
            className='hidden md:flex'
          >
            {navLinks.map((navlink) => (
              <Link
                key={navlink.name}
                href={navlink.link}
              >
                <li className='ml-10 text-sm uppercase hover:border-b border-current'>
                  {navlink.name}
                </li>
              </Link>
            ))}
          </ul>
          {/* mobile nav menu button */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* mobile side nav menu */}
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-130%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              {/* logo */}
              <Image
                src='/assets/navLogo.png'
                width={40}
                height={40}
                alt=''
              />
              {/* menu close button */}
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>Let's build something legendary together</p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            {/* mobile nav links */}
            <ul className='uppercase'>
              {navLinks.map((navlink) => (
                <Link
                  key={navlink.name}
                  href={navlink.link}
                >
                  <li
                    onClick={() => setNav(false)}
                    className='py-4 text-sm'
                  >
                    {navlink.name}
                  </li>
                </Link>
              ))}
            </ul>
            {/* social media links */}
            <div className='pt-10'>
              <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedinIn />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaGithub />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
