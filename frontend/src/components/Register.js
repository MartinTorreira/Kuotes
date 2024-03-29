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
        <div className="w-full ">
            <h1 className="flex justify-center text-3xl font-bold mt-20 p-4 underline underline-offset-8 decoration-green-400">SIGN UP</h1>
            <h2 className="flex justify-center mb-10">Create a new account</h2>
            <form onSubmit={handleRegister} className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                    <input 
                        className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input-field"
                        type="text"
                        placeholder="Username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
               
                <div className="mb-5">
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input 
                        className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input 
                        className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                    <input
                        className="bg-gray-50 border-2  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                    <input 
                        className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>

                <div className="flex justify-center">
                    <button 
                        className="bg-transparent hover:bg-green-400 font-semibold hover:text-black py-2 px-4 border-2 border-green-400 hover:border-transparent rounded"
                        onSubmit={handleRegister}>Register</button>
                </div>
            </form>
            <p className="mt-8 flex justify-center gap-2">
                Already have an account? <button onClick={() => handleNavigate("login")} className="font-bold text-blue-500 hover:underline mb-10">Log in</button>
            </p>
        </div>
    );


}

export default Register;