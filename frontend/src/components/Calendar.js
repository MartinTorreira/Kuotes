import React, { useContext } from "react";
import { LoginContext } from "./user/LoginContext";
import { Account } from "./user/Account.js";
import { Calendar } from "react-big-calendar";

const CalendarComponent = () => {
    const { token } = useContext(LoginContext);

    // Seleccionar año de la fecha de la quote mas reciente


    return (
        <>
            {token !== null ? 
            <div className="mt-20"> 
                <Calendar/>
            </div> : <Account />}</>
    );
};

export default CalendarComponent;
