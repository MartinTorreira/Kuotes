import React, { createContext, useState, useContext } from 'react';
import useDarkSide from '../hook/useDarkSide';

const ThemeContext = createContext({});

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

  const toggleDarkMode = checked => {
    setTheme(checked ? 'dark' : 'light');
    setDarkSide(checked);
  };

  return (
    <ThemeContext.Provider value={{ darkSide, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

