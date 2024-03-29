import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import { Navbar } from './components/Navbar';

function App() {

  return (
    <div className={`min-h-screen flex flex-col items-center transition duration-200 dark:bg-gray-900 p-10}`}>
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/signup" element={<Register/>} />      
          <Route path="/users/login" element={<Login/>} />      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
