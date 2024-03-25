import React, { useState } from "react";
import {signUp} from "../backend/userService.js";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

    const [userName, setUserName] = useState("");   
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");

    const navigate = useNavigate();

    function getParams(){
        const user = {
            userName,
            password,
            firstName,
            lastName,
            email
        }
        return user;
    };

    const onSuccess = () => {
        toast.success("User registered successfully");
        navigate("/users/login")
    }

    const onErrors = () => {
        toast.error("Incorrect sign up");
    }

    const reauthenticationCallback = () => {
        toast.error("You must sign up again");
    }


    const handleRegister = (e) => {
        e.preventDefault();
        const user = getParams();
        signUp(user, onSuccess, onErrors, reauthenticationCallback);
    }

    return(
        <div>
            <form onSubmit={handleRegister}>
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
                <input 
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <button onSubmit={handleRegister}>Register</button>
            </form>
            <ToastContainer />
        </div>
    );


}

export default Register;