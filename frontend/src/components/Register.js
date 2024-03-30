import React, { useState } from "react";
import {signUp} from "../backend/userService.js";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputForm from "./inputs/InputForm.js";

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
        console.log("SUCCESS")
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

    const handleNavigate = (path) => {
        navigate(`/users/${path}`);
    }

    return(
        <div className="w-full">
            <h1 className="flex justify-center text-3xl font-bold mt-20 p-4 underline underline-offset-8 decoration-green-400">SIGN UP</h1>
            <h2 className="flex justify-center m-5 text-lg">Create a new account</h2>
            <form onSubmit={handleRegister} className="max-w-sm mx-auto">
                <InputForm
                    label="Username"
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />

                <InputForm
                    label="First name"
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <InputForm
                    label="Last name"
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />

                <InputForm
                    label="Password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <InputForm
                    label="Email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
               
            </form>
            <p className="mt-8 flex justify-center gap-2">
                Already have an account? 
                <button onClick={() => handleNavigate("login")} 
                        className="font-bold text-blue-500 hover:underline mb-10">Log in
                </button>
            </p>
        </div>
    );


}

export default Register;