import React, { useContext, useEffect } from "react";
import { LoginContext } from "../context/LoginContext";
import {config} from "../config/constants.js";

const Home = () => {

    let { setToken, setUser} = useContext(LoginContext);

    useEffect(() => {
        const bearer = localStorage.getItem(config.SERVICE_TOKEN_NAME);
        const user = localStorage.getItem("user");
        if (bearer != null){
            setToken(bearer);
            setUser(JSON.parse(user));
        }

    }, [setToken, setUser]);

    return(
        <div>
           
        </div>
    );

};

export default Home;