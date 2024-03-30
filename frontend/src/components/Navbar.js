import React, { useContext, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Switcher from './Switcher';
import { useTheme } from '../context/ThemeContext'; 
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';
import { config } from '../config/constants';

export const Navbar = () => {
  const { darkSide } = useTheme(); 
  const [nav, setNav] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false); 
  const { token, setToken } = useContext(LoginContext);
  const navigate = useNavigate();

  var CURRENT_PATH =  window.location.pathname;

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogOut = () => {
    setToken(null);
    localStorage.removeItem(config.SERVICE_TOKEN_NAME);
  };

  const navItems = [
    { id: 1, text: 'Home', url: '/', logged: true , unLogged: true },
    { id: 2, text: 'Sign up', url: '/users/signup',  logged: false, unLogged: true },
    { id: 3, text: 'Log in', url: '/users/login',  logged: false, unLogged: true },
    { id: 4, text: 'Log out', url: '/users/',  logged: true, unLogged: false },
  ];

  const changeColor = (url) => {
    if ( CURRENT_PATH === url ) {
      return '[#00df9a]';
    } 
  }

  const handleNavigate = item  => {
    if(item.text === "Log out")
      handleLogOut();
    navigate(item.url);
  }

  const filteredItems = navItems.filter(item => {
    switch (token) {
      case null : return item.unLogged;
      default : return item.logged;
    }
  });

  return (
    <div className={`p-8 fixed mb-10 backdrop-filter backdrop-blur-lg border-b border-gray border-slate-600 w-full bg-transparent flex justify-between items-center h-12 max-w-[1240px] mx-auto px-4 text-${darkSide ? 'white' : 'black'}`}> 
       <h1 className={`text-2xl font-bold text-[#00df9a] align-left justify-start `}>{`{Kuotes}`}</h1>
          <ul className='hidden md:flex'>
            {filteredItems.map(item => (
                <li
                  key={item.id}
                  className={`p-2 font-medium hover:text-[#00df9a] rounded m-4 cursor-pointer duration-300 text-${changeColor(item.url)}`}
                  onClick={() => handleNavigate(item)}
                >
                  {item.text}
                </li>
            ))}
          </ul>

         {/* Profile dropdown */}
        <div className="flex gap-4">
          <Switcher />
          <img
            src="profile.png"
            alt="Profile"
            className="w-8 h-8 rounded-full cursor-pointer"
            onClick={() => setProfileDropdown(!profileDropdown)}
          />
          {/* Dropdown content */}
          {profileDropdown && (
            <ul className="absolute top-12 right-10 dark:bg-[#25252F] dark:text-white border rounded shadow-md p-2 justify-center text-center">
              <li className="p-2 cursor-pointer dark:hover:bg-white dark:hover:text-[#25252F] white:hover:bg-[#25252F]" onClick={() => setProfileDropdown(false)}>
                <Link to="users/profile">Profile</Link>
              </li>
              <li className="p-2 cursor-pointer dark:hover:bg-white dark:hover:text-[#25252F] white:hover:bg-[#25252F]" onClick={() => setProfileDropdown(false)}>
                <Link to="users/settings">Settings</Link>
              </li>
              <li className="p-2 cursor-pointer dark:hover:bg-white dark:hover:text-[#25252F] white:hover:bg-[#25252F]" onClick={() => setProfileDropdown(false)}>
                <p onClick={handleLogOut}>Log out</p>
              </li>
            </ul>
          )}
        </div>

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
