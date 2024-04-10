import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import {config} from "../config/constants.js";
import Quote from "./Quote.js";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import QuoteForm from "./forms/QuoteForm.js";
import useDarkSide from '../hook/useDarkSide'
import { useTheme } from '../context/ThemeContext';


const Home = () => {

    const [isOpen, setIsOpen] = useState(false);  
    const navigate = useNavigate();
    const  { token, setToken, setUser} = useContext(LoginContext);

    const handleNavigate = () => {
        navigate("/quotes/create")
    }

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const bearer = localStorage.getItem(config.SERVICE_TOKEN_NAME);
        const user = localStorage.getItem("user");
        if (bearer != null){
            setToken(bearer);
            setUser(JSON.parse(user));
        }

    }, [setToken, setUser]);

    return(
        <>
        <button className="mt-20  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={toggleModal}>
         Add new quote
        </button>
        {
            isOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="modal-overlay absolute w-full h-full opacity-50" onClick={toggleModal}></div>
                  <div className="modal-container bg-white md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto border-2 border-gray-400 dark:border-gray-600">
                    <div className="p-4 modal-content text-left dark:bg-[#29292E] bg-gray-200 ">
                      <div className="modal-header flex justify-between items-center pb-3">
                        <h3 className="text-3xl font-bold">Create a new quote</h3>
                        <button className="modal-close" onClick={toggleModal}>
                          <svg className="dark:text-gray-200 text-gray-800 fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path d="M10.83 9l6.58-6.59a1 1 0 0 0-1.41-1.42L9 7.59 2.41 1A1 1 0 0 0 1 2.41L7.59 9 1 15.59a1 1 0 1 0 1.41 1.42L9 10.41l6.59 6.58a1 1 0 0 0 1.41-1.41z" />
                          </svg>
                        </button>
                      </div>
                      <div className="modal-body">
                        <QuoteForm/>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          );
        };

export default Home;