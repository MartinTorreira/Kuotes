import React, { useContext, useEffect } from "react";
import { LoginContext } from "../context/LoginContext";
import {config} from "../config/constants.js";

const Home = () => {

    let { token, setToken, setUser} = useContext(LoginContext);

    useEffect(() => {
        const bearer = localStorage.getItem(config.SERVICE_TOKEN_NAME);
        const user = localStorage.getItem("user");
        if (bearer != null){
            setToken(bearer);
            setUser(JSON.parse(user));
        }

    }, [setToken, setUser]);

    return(
        <div className="mt-20 flex flex-col justify-content p-4 gap-4">
           <h1 className="text-3xl font-bold">Home</h1>
           <div className="container">
                {token != null ? <h1>You are authenticated</h1> : <h1>Please log in</h1>}
           </div>
        </div>
    );

};

export default Home;