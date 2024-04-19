import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { Navbar } from './components/Navbar';
import Register from './components/user/Register';
import Login from './components/user/Login';
import  Profile  from './components/user/Profile';
import {Account} from './components/user/Account';
import '@fontsource-variable/onest';
import 'react-toastify/dist/ReactToastify.css';
import ShowQuotes from './components/quote/ShowQuotes';



function App() {

  return (
    <div className={`min-h-screen flex flex-col items-center transition duration-200 dark:bg-[#25252F] p-10}`}>
      <BrowserRouter>
      <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/users/home' element={<Home />} />   
            <Route path="/users/signup" element={<Register/>} /> 
            <Route path="/users/login" element={<Login/>} />
            <Route path="/users/account" element={<Account/>} />      
            <Route path="/users/profile" element={<Profile/>} />
            <Route path="/quotes/show" element={<ShowQuotes/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
