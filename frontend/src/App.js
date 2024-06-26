import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { Navbar } from './components/Navbar';
import Register from './components/user/Register';
import Login from './components/user/Login';
import Profile from './components/user/Profile';
import { Account } from './components/user/Account';
import '@fontsource-variable/onest';
import 'react-toastify/dist/ReactToastify.css';
import ShowQuotes from './components/quote/ShowQuotes';
import CalendarComponent from './components/Calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";


function App() {


  return (
    <div className={`min-h-screen flex flex-col items-center transition duration-200 dark:bg-[#181414] p-10}`}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path='/users/home' element={<Home />} />
          <Route path="/users/signup" element={<Register />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/account" element={<Account />} />
          <Route path="/users/profile" element={<Profile />} />
          <Route path="/quotes/show" element={<ShowQuotes />} />
          <Route path="/quotes/calendar" element={<CalendarComponent />} />
          <Route path="*" element={<Account />} />
        </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
