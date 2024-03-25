import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Switcher from './Switcher';
import { useTheme } from '../context/ThemeContext'; 
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const { darkSide } = useTheme(); 
  const [nav, setNav] = useState(false);

  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home', url: '/'},
    { id: 2, text: 'Sign up', url: '/users/signup'},
    { id: 3, text: 'Log in', url: '/users/login'},
    { id: 4, text: 'About', url: '/about'},
    { id: 6, text: <Switcher /> }
  ];

  const handleNavigate = url => {
    navigate(url);
  }

  return (
      <div className={`w-full bg-transparent flex justify-between items-center h-12 max-w-[1240px] mx-auto px-4 text-${darkSide ? 'white' : 'black'}`}> 
        <h1 className={`text-3xl font-bold text-[#00df9a]`}>Web Application</h1>
        <ul className='hidden md:flex'>
          {navItems.map(item => (
              <li
                key={item.id}
                className='p-2 font-medium hover:text-[#00df9a] rounded m-4 cursor-pointer duration-300'
                onClick={() => handleNavigate(item.url)}
              >
                {item.text}
              </li>
          ))}
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={12} /> : <AiOutlineMenu size={12} />}
        </div>

        <ul
          className={
            nav
              ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
              : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
          }
        >
        </ul>
      </div>
  );
};
