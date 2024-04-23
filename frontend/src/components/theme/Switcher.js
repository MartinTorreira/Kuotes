import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from './ThemeContext';

export default function Switcher() {
  const {darkSide, toggleDarkMode } = useTheme();

  return (
      <div className='flex'>
        <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={24} />
      </div>
  );
}