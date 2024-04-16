import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import dayjs from "dayjs";
import { createQuote } from "../../backend/quoteService";


const QuoteForm = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [importance, setImportance] = useState("");
    const [dateInput, setDateInput] = useState({ dateInput: null });
    const [hour, setHour] = useState(dayjs(new Date()));

    function getParams(date) {
        const quote = {
            title,
            description,
            date,
            importance
        };

        return quote;
    }



    const onSuccess = () => {
        console.log("QUOTE CREATED");
       
    }

    const onErrors = () => {
        console.log("ERROR")
    }

    const handleDateChange = (dateInput) => {
        setDateInput(dateInput);
    };

    const handleHourChange = (hour) => {
        setHour(hour);
    }

    const handleSubmit = (e) => {
        console.log("SUBMIT");
        const combinedDateTime = `${dateInput.startDate}T${hour.hour().toString().padStart(2, '0')}:${hour.minute().toString().padStart(2, '0')}:00`;
        const quote = getParams(combinedDateTime);
       
        createQuote(quote, onSuccess, onErrors);
    }   

    return (
        <div className="grid items-right gap-x-4 p-4 px-3 py-2 mt-5 ">
            <form class="w-full max-w-lg" >
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2 dark:text-gray-200" for="grid-last-name">
                            Title *
                        </label>
                        <input class="text bg-gray-200 border-2 border-gray-400 text-gray-900 text-sm rounded focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-[#29292E] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 input-field" id="grid-first-name" type="text" placeholder="A title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}

                        />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="text-gray-900 text-xs font-bold mb-2 dark:text-gray-200 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                            Importance
                        </label>
                        <div class="relative">
                            <select class="block appearance-none w-full py-3 px-4 pr-8 rounded leading-tight text bg-gray-200 border-2 border-gray-400 text-gray-900 text-sm rounded focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-[#29292E] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 input-field" id="grid-state"
                                value={importance}
                                onChange={(e) => setImportance(e.target.value)}
                            >
                                <option value="LOW">Low</option>
                                <option value="MEDIUM">Medium</option>
                                <option value="HIGH">High</option>
                                <option value="CRITICAL">Critical</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 dark:text-gray-200 text-gray-700">
                                <svg class="fill-current h-4 w-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3 mb-6 md:mb-0 md:w-1/2">
                        <label class="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2 dark:text-gray-200" for="grid-last-name">
                            Date *
                        </label>
                        <Datepicker
                            minDate={new Date()}
                            maxDate={new Date().setFullYear(new Date().getFullYear() + 3)}
                            useRange={false}
                            asSingle={true}
                            value={dateInput}
                            onChange={handleDateChange}
                        />
                    </div>

                    <div class=" w-full px-3 mb-6 md:mb-0 md:w-1/2 ">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-200" for="grid-last-name">
                            Hour *
                        </label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <MobileTimePicker
                                value={hour}
                                onChange={handleHourChange}
                            />
                        </LocalizationProvider>

                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-200" for="grid-password">
                            Description
                        </label>
                        <textarea className="resize-none appearance-none block w-full py-3 px-4 mb-3 text bg-gray-200 border-2 border-gray-400 text-gray-900 text-sm rounded focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-[#29292E] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 input-field " id="grid-password" placeholder="Enter a description here..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>


                <div className="flex justify-end">
                    <button type="submit" onClick={handleSubmit} className=" border-2 border-gray-800 py-3 px-3 mx-2 rounded-lg hover:bg-gray-800 hover:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-800 dark:border-gray-200">
                        Add quote
                    </button>
                </div>
            </form>
        </div>


    );
};


export default QuoteForm;