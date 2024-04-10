import React, {useState} from "react";
import { createQuote } from "../backend/quoteService";
import QuoteForm from "./forms/QuoteForm";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";


const Quote = () => { 

    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ date, setDate ] = useState("");
    const [ hour, setHour ] = useState("");
    const [ importance, setImportance ] = useState("");



    const handleDateTime = (date, hour) => {
        // Juntar fecha y hora en un LocalDateTime
    }

    function getParams() {
        const quote = {
            title,
            description,
            date,
            importance
        };

        return quote;
    }

    const onSuccess = () => {
        console.log("SUCCESS");
    }

    const onErrors = () => {
        console.log("ERROR")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const quote = getParams();
        createQuote(quote, onSuccess, onErrors)
    }
    
    
    return (
        <QuoteForm/> 
    );
};

 export default Quote;