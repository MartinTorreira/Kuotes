import React, {useState} from "react";
import QuoteInput from "./inputs/QuoteInput";
import { createQuote } from "../backend/quoteService";

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
    
    
    return(
        <div className="grid items-right gap-x-4 mt-20 p-10 ">
            <form onSubmit={handleSubmit}>
                <QuoteInput
                    label="Title*"
                    type="text"
                    placeholder="The title of the quote"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                
                <QuoteInput
                    label="Description*"
                    type="text"
                    placeholder="A brief description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <QuoteInput
                    label="Hour*"
                    type="text"
                    placeholder="Hour"
                    value={hour}
                    onChange={(e) => setHour(e.target.value)}
                />

                <QuoteInput
                    label="Date*"
                    type="text"
                    placeholder="Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />

                <QuoteInput
                    label="Importance"
                    type="text"
                    placeholder="Importance"
                    value={importance}
                    onChange={(e) => setImportance(e.target.value)}
                />

                <button className="flex flex-col size-12 justify-center p-8">
                    Create
                </button>
            </form>
        </div>
    );
};

 export default Quote;