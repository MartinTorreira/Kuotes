import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { Navbar } from './components/Navbar';
import Register from './components/user/Register';
import Login from './components/user/Login';
import  Profile  from './components/user/Profile';
import {Account} from './components/user/Account';
import Quote from './components/quote/Quote';
import '@fontsource-variable/onest';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  return (
    <div className={`min-h-screen flex flex-col items-center transition duration-200 dark:bg-[#25252F] p-10}`}>
      <BrowserRouter>
      <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/home' element={<Home />} />   
            <Route path="/users/signup" element={<Register/>} /> 
            <Route path="/users/login" element={<Login/>} />
            <Route path="/users/account" element={<Account/>} />      
            <Route path="/users/profile" element={<Profile/>} />
            <Route path="/quotes/create" element={<Quote/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
