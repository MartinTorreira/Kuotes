import React, {useState} from "react";
import InputForm from "./inputs/InputForm";
import QuoteInput from "./inputs/QuoteInput";

const Quote = () => { 

    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ date, setDate ] = useState("");
    const [ hour, setHour ] = useState("");
    const [ importance, setImportance ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit");
    }
    
    
    return(
        <div className="flex flex-col align-left gap-4">
            <form onSubmit={handleSubmit}>
                <QuoteInput
                    label="Title"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    >

                </QuoteInput>
            </form>
        </div>
    );
};

 export default Quote;