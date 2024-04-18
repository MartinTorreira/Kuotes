import React, { useContext, useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Switcher from '../components/theme/Switcher';
import { useTheme } from '../components/theme/ThemeContext';
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../components/user/LoginContext';
import { config } from '../config/constants';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

export const Navbar = () => {
  const { darkSide } = useTheme(); 
  const [nav, setNav] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false); 
  const { token, setToken } = useContext(LoginContext);
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogOut = () => {
    setToken(null);
    toast.success("Logged out successfully", {
      position : "bottom-center",
      hideProgressBar: true,

    });
    localStorage.removeItem(config.SERVICE_TOKEN_NAME);
    navigate("/users/account");
  };
 

  return (
    <div className={` p-8 fixed mb-10 backdrop-filter backdrop-blur-lg border-b border-gray border-slate-600 w-full bg-transparent flex justify-between items-center h-12 max-w-[1240px] mx-auto px-4 
        text-${darkSide ? 'white' : 'black'} ${isScrolled ? 'opacity-0 transition duration-200 ease-in-out' : ''}`}> 
       <a href='/' className={`text-2xl font-bold text-[#00df9a] align-left justify-start `}>{`{Kuotes}`}</a>

         {/* Profile dropdown */}
        <div className="flex gap-4">
          <Switcher />
          { token &&
            <img
              src="profile.png"
              alt="Profile"
              className="w-8 h-8 rounded-full cursor-pointer"
              onClick={() => setProfileDropdown(!profileDropdown)}
              
            />
          }

          {/* Dropdown content */}
          { profileDropdown && (
            <ul className="absolute top-12 right-10 dark:bg-[#25252F] dark:text-white border rounded shadow-md p-2 justify-center text-center">
              <li className="p-2 cursor-pointer dark:hover:bg-white dark:hover:text-[#25252F] white:hover:bg-[#25252F]" onClick={() => setProfileDropdown(false)}>
                <Link to="users/profile">Your profile</Link>
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
