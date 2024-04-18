import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import { createQuote } from "../../backend/quoteService";

const QuoteForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [importance, setImportance] = useState("");
    const [date, setDate] = useState(new Date());
    const [hour, setHour] = useState(dayjs(new Date()));

    function getParams(dateTime) {
        const quote = {
            title,
            description,
            date: dateTime.toISOString(),
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

    const handleHourChange = (e) => {
        setHour(dayjs(e.target.value, "HH:mm"));
    }

    const handleSubmit = (e) => {
        const combinedDateTime = new Date(date);
        combinedDateTime.setHours(hour.hour());
        combinedDateTime.setMinutes(hour.minute());
        const quote = getParams(combinedDateTime);
        createQuote(quote, onSuccess, onErrors);
    }

    return (
        <div className="grid items-right gap-x-4 p-4 px-3 py-2 mt-5">
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2 dark:text-gray-200" htmlFor="grid-last-name">
                            Title *
                        </label>
                        <input className="text bg-gray-200 border-2 border-gray-400 text-gray-900 text-sm rounded focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-[#29292E] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 input-field" id="grid-first-name" type="text" placeholder="A title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="text-gray-900 text-xs font-bold mb-2 dark:text-gray-200 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            Importance
                        </label>
                        <div className="relative">
                        <select className="block appearance-none w-full py-3 px-4 pr-8 rounded leading-tight bg-gray-200 border-2 border-gray-400 text-gray-900 text-sm focus:outline-none focus:border-blue-500 rounded focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-[#29292E] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 input-field" id="grid-state"
                                value={importance}
                                onChange={(e) => setImportance(e.target.value)}
                            >
                                <option value="LOW">Low</option>
                                <option value="MEDIUM">Medium</option>
                                <option value="HIGH">High</option>
                                <option value="CRITICAL">Critical</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 dark:text-gray-200 text-gray-700">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0 md:w-1/2">
                        <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2 dark:text-gray-200" htmlFor="grid-last-name">
                            Date *
                        </label>
                        <DatePicker
                            selected={date}
                            onChange={date => setDate(date)}
                            dateFormat="yyyy-MM-dd"
                            className="text bg-gray-200 border-2 border-gray-400 text-gray-900 text-sm rounded focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-[#29292E] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 input-field"
                        />
                    </div>
                    <div className="w-full px-3 mb-6 md:mb-0 md:w-1/2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-200" htmlFor="grid-last-name">
                            Hour *
                        </label>
                        <input className="text-gray-900 dark:text-gray- bg-gray-200 border-2 border-gray-400 text-gray-900 text-sm rounded focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-[#29292E] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 input-field" type="time" value={hour.format("HH:mm")} onChange={handleHourChange} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-200" htmlFor="grid-password">
                            Description
                        </label>
                        <textarea className="resize-none appearance-none block w-full py-3 px-4 mb-3 text bg-gray-200 border-2 border-gray-400 text-gray-900 text-sm rounded focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-[#29292E] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 input-field " id="grid-password" placeholder="Enter a description here..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button type="submit" onClick={handleSubmit} className="border-2 border-gray-800 py-2 px-2 rounded-lg hover:bg-gray-800 hover:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-800 dark:border-gray-200">
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
};

export default QuoteForm;
