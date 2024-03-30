import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from '../context/ThemeContext';

export default function Switcher() {
  const {darkSide, toggleDarkMode } = useTheme();

  return (
      <div className='flex mt-1'>
        <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={24} />
      </div>
  );
}