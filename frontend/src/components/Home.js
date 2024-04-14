import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "./user/LoginContext.js";
import { config } from "../config/constants.js";
import QuoteForm from "./forms/QuoteForm.js";
import NewQuoteIcon from "../icons/NewQuoteIcon.js";
import { Account } from "./user/Account.js";
import ShowQuotes from "./quote/ShowQuotes.js";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { token, setToken, setUser } = useContext(LoginContext);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
  };


  useEffect(() => {
    const bearer = localStorage.getItem(config.SERVICE_TOKEN_NAME);
    const user = localStorage.getItem("user");
    if (bearer != null) {
      setToken(bearer);
      setUser(JSON.parse(user));
    }
  }, [setToken, setUser]);

  return (
    <>
      {token != null ? (
        <button
          className="py-4 rounded-lg mt-20 bg-gray-100 dark:bg-[#25252f]  border dark:text-white dark:border-gray-200 dark:hover:bg-[#09cb93] dark:hover:text-gray-900 dark:hover:border-gray-900  gap-x-2 hover:text-black hover:bg-[#06c68c] hover:border-gray-800 text-black py-2 px-4  text-center inline-flex items-center border-gray-800  font-medium "
          onClick={toggleModal}
        >
          <NewQuoteIcon />  Add a new quote
        </button>
      ) : <Account />}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="modal-overlay absolute w-full h-full backdrop-filter backdrop-blur-[5px] " onClick={toggleModal}></div>
          <div className="modal-container bg-white mx-auto rounded shadow-lg z-50 border-2 border-gray-400 dark:border-gray-600 transition-all">
            <div className="p-4 modal-content text-left dark:bg-[#29292E] bg-gray-200 ">
              <div className="modal-header flex justify-between items-center pb-3">
                <h3 className="text-3xl font-bold">Create a quote</h3>
                <button className="modal-close" onClick={toggleModal}>
                  <svg
                    className="dark:text-gray-200 text-gray-800 fill-current dark:hover:text-red-500 hover:text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M10.83 9l6.58-6.59a1 1 0 0 0-1.41-1.42L9 7.59 2.41 1A1 1 0 0 0 1 2.41L7.59 9 1 15.59a1 1 0 1 0 1.41 1.42L9 10.41l6.59 6.58a1 1 0 0 0 1.41-1.41z" />
                  </svg>
                </button>
              </div>
              <div className="modal-body ">
                <QuoteForm  />
              </div>
            </div>
          </div>
        </div>
      )}

      <div>
        <ShowQuotes />
      </div>
    </>
  );
};

export default Home;
