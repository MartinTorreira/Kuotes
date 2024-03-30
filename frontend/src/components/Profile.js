import React from "react";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";


const Profile = () => {

    const {token, setToken, setUser} = useContext(LoginContext);    

    return(
        <div className="w-full mt-10">
           {token === null ? <h1>You must log in</h1> : <></>  } 
           {token !== null &&  <>
                <h1 className="flex justify-center text-3xl font-bold mt-20 p-4 underline underline-offset-8 decoration-green-400">PROFILE</h1>
                <h2 className="flex justify-center mb-10 ">Welcome to your profile</h2>
           </>
           } 
            
        </div>
    )
}

export default Profile;