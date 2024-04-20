import React, { useContext, useState } from "react";
import { login } from "../../backend/userService.js";
import { LoginContext } from "./LoginContext.js";
import {config } from "../../config/constants.js"
import { useNavigate } from "react-router-dom";
import InputForm from "../inputs/InputForm.js";
import ButtonSubmit from "../inputs/ButtonSubmit.js";
import { toast } from 'react-toastify';


const Login = () => {

    let { token } = useContext(LoginContext);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setToken, setUser } = useContext(LoginContext); 
    
    const navigate = useNavigate();

    const onErrors = () => {
        toast.error("Incorrect fields", {
            position: "bottom-center",
            hideProgressBar: true,
        });
    }

    const reauthenticationCallback = () => {
        console.log("reauthenticationCallback")
    }

    const handleNavigate = (path) => {
        navigate(`/users/${path}`);
    }


    const onSuccess = (authenticatedUser) => {
		setToken(authenticatedUser.serviceToken);
		setUser(authenticatedUser.user);

		localStorage.setItem(
			config.SERVICE_TOKEN_NAME,
			`Bearer ${authenticatedUser.serviceToken}`,
		);

		localStorage.setItem("user", JSON.stringify(authenticatedUser.user));
		handleNavigate("home");
        toast.success("You have logged successfully", {
            position: "bottom-center",
            hideProgressBar: true,
        
        });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        login(userName, password, onSuccess, onErrors, reauthenticationCallback);
        console.log(token)
    };

    
    return(
        <div className="w-full mt-10">
            <h1 className="flex justify-center text-3xl font-bold mt-20 p-4 pt-10 underline underline-offset-8 decoration-green-400">LOG IN</h1>
            <h2 className="flex justify-center mb-10">Sign in to your account</h2>
            <form className="max-w-sm mx-auto" onSubmit={handleLogin}>
                <InputForm
                    label="Username"
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />

                <InputForm
                    label="Password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <ButtonSubmit
                    label={"Submit"}
                    fn={handleLogin}
                />
                
            </form>
            <p className="mt-8 flex justify-center gap-2">
                Don't have an account? 
                    <button 
                        onClick={() => handleNavigate("signup")}    
                        className=" font-bold text-blue-500 hover:underline hover:scale-105">Sign up
                    </button>
            </p>
        </div>

    );

};
export default Login;