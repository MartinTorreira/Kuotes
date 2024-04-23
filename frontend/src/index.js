import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LoginProvider } from './components/user/LoginContext';
import { ThemeProvider } from './components/theme/ThemeContext';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginProvider>
      <ThemeProvider>
        <ToastContainer
          theme="dark:dark light border border-gray-800 dark:border-gray-400 dark:text-gray-200 dark:bg-gray-900/10"
          position="bottom-center"
          hideProgressBar={true}
        />
        <App />
      </ThemeProvider>
    </LoginProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
