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

    const onSuccess = (authenticatedUser) => {
		setToken(authenticatedUser.serviceToken);
		setUser(authenticatedUser.user);

		localStorage.setItem(
			config.SERVICE_TOKEN_NAME,
			`Bearer ${authenticatedUser.serviceToken}`,
		);
		localStorage.setItem("user", JSON.stringify(authenticatedUser.user));
		navigate("/");


    }

    const handleLogin = () => {
        login(userName, password, onSuccess, () => {}, () => {});
    };

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={() => handleLogin}>
                <input 
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onSubmit={() => handleLogin}>Login</button>
            </form>
        </div>
    );

};
export default Login;