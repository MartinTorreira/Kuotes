import React, { useEffect, useContext } from "react";
import { LoginContext } from "./user/LoginContext.js";
import { Account } from "./user/Account.js";
import LandingPage from "./layouts/LandingPage.js";
import useQuoteStore from '../components/store/useQuoteStore';
import { getQuotes } from '../backend/quoteService';

const Home = () => {
  const { token, setToken, setUser } = useContext(LoginContext);
  const { setQuotes } = useQuoteStore();

  useEffect(() => {
    const bearer = localStorage.getItem("SERVICE_TOKEN_NAME");
    const user = localStorage.getItem("user");

    if (bearer) {
      setToken(bearer);
      setUser(JSON.parse(user));
    }

    if(!token) return;
    getQuotes(
      quoteList => {
        const sortedQuotes = [...quoteList].sort((a, b) => new Date(a.date) - new Date(b.date));
        const userQuotes = sortedQuotes.filter(quote => quote.userDto.id === JSON.parse(localStorage.getItem("user")).id);
        setQuotes(userQuotes);
      },
      error => {
        if (error.response && error.response.status === 401) {
          <Account />;
        }
        console.error("Error fetching quotes:", error);
      }
    );

  }, [setToken, setUser, setQuotes, token]);

  return (
    <div className="flex justify-center items-start">
      {token ? <LandingPage /> : <Account />}
    </div>
  );
};

export default Home;
