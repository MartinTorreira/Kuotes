import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import { LoginProvider } from './context/LoginContext'; 
import { Navbar } from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';

function App() {

  return (
    <div className={`min-h-screen flex flex-col items-center transition duration-200 dark:bg-gray-900 p-10}`}>
      <ThemeProvider>
        <BrowserRouter>
          <Navbar/>
          <LoginProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users/signup" element={<Register/>} />      
              <Route path="/users/login" element={<Login/>} />      
            </Routes>
          </LoginProvider>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
