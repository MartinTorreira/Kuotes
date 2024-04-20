import React, { useContext, useEffect } from "react";
import { LoginContext } from "./user/LoginContext.js";
import { config } from "../config/constants.js";
import { Account } from "./user/Account.js";
import LandingPage from "./layouts/LandingPage.js";

const Home = () => {
  let { token, setToken, setUser } = useContext(LoginContext);

  useEffect(() => {
    const bearer = localStorage.getItem(config.SERVICE_TOKEN_NAME);
    const user = localStorage.getItem("user");
    if (bearer != null) {
      setToken(bearer);
      setUser(JSON.parse(user));
    }
  }, [setToken, setUser, token]);


  return (
    <>
      {token != null ? (
        <LandingPage />
      ) : <Account />}
    </>
  );
};


export default Home;
