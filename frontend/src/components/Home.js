import React, { useContext, useEffect } from "react";
import { LoginContext } from "../context/LoginContext";
import {config} from "../config/constants.js";
import Quote from "./Quote.js";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    let { token, setToken, setUser} = useContext(LoginContext);

    const handleNavigate = () => {
        navigate("/quotes/create")
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
        <div className="mt-20 flex flex-col justify-content p-4 gap-4">
           <h1 className="text-3xl font-bold">Home</h1>
           <div className="">
                <button onClick={handleNavigate}>
                    Create a new quote
                </button>
           </div>
        </div>
    );

};

export default Home;