import React, { useContext, useState } from "react";
import { login } from "../backend/userService";
import { LoginContext } from "../context/LoginContext";
import {config } from "../config/constants.js"
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setToken, setUser } = useContext(LoginContext); 
    
    const navigate = useNavigate();

    const onErrors = () => {
        console.log("onErrors")
    }

    const reauthenticationCallback = () => {
        console.log("reauthenticationCallback")
    }

    const onSuccess = (authenticatedUser) => {
        console.log("onSuccess")
		setToken(authenticatedUser.serviceToken);
		setUser(authenticatedUser.user);

		localStorage.setItem(
			config.SERVICE_TOKEN_NAME,
			`Bearer ${authenticatedUser.serviceToken}`,
		);
		localStorage.setItem("user", JSON.stringify(authenticatedUser.user));
		navigate("/users/");

    }

    const handleLogin = () => {
        login(userName, password, onSuccess, onErrors, reauthenticationCallback);
    };

    const handleNavigate = (path) => {
        navigate(`/users/${path}`);
    }

    return(
        <div className="w-full mt-10">
            <h1 className="flex justify-center text-3xl font-bold mt-20 p-4 underline underline-offset-8 decoration-green-400">LOG IN</h1>
            <h2 className="flex justify-center mb-10 ">Sign in to your account</h2>
            <form onSubmit={handleLogin} className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                    <input 
                        className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input-field"
                        type="text"
                        placeholder="Username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                
                <div className="mb-5">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input 
                    className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <div className="flex justify-center">
                    <button 
                        className="bg-transparent hover:bg-green-400 font-semibold hover:text-black py-2 px-4 border-2 border-green-400 hover:border-transparent rounded"
                        onSubmit={handleLogin}>
                        Login
                    </button>
                </div>
            </form>
            <p className="mt-8 flex justify-center gap-2">
                Don't have an account? <button onClick={() => handleNavigate("signup")} className="font-bold text-blue-500 hover:underline">Sign up</button>
            </p>
        </div>

    );

};
export default Login;