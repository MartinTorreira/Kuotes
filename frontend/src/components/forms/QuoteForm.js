import React, { useState } from "react";
import { DatePicker } from 'antd';
import dayjs from "dayjs";
import { createQuote } from "../../backend/quoteService";
import { TimePicker  } from 'antd';
import ClockIcon from "../../icons/ClockIcon";
import CalendarIcon from "../../icons/CalendarIcon";

const QuoteForm = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [importance, setImportance] = useState("");
    const [date, setDate] = useState(null);
    const [hour, setHour] = useState(dayjs('12:00', 'HH:mm'));

    function getParams(date) {
        const quote = {
            title,
            description,
            date: date.toISOString(),
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

    const handleHourChange = (hour) => {
        setHour(hour);
    }

    const disabledDate = (current) => {
        return current && current < dayjs().startOf('day');
    };

    const handleSubmit = (e) => {
        const combinedDateTime = dayjs(date).set('hour', hour.hour()).set('minute', hour.minute());
        const quote = getParams(combinedDateTime);
        createQuote(quote, onSuccess, onErrors);
    }

    return (
        <div className="grid items-right gap-x-4 p-4 px-3 py-2 mt-5 ">
            <form className="w-full max-w-lg" >
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2 dark:text-gray-200" htmlFor="grid-last-name">
                            sad *
                        </label>
                        <input className="text bg-gray-200 border-2 border-gray-400 text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-[#29292E] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  input-field" id="grid-first-name" type="text" placeholder="A title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="text-gray-900 text-xs font-bold mb-2 dark:text-gray-200 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            Importance
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full py-3 px-4 pr-8 rounded leading-tight text bg-gray-200 border-2 border-gray-400 text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-[#29292E] dark:border-gray-600 dark:text-gray-400  input-field" id="grid-state"
                                value={importance}
                                onChange={(e) => setImportance(e.target.value)}
                            >
                                <option value="LOW">Low</option>
                                <option value="MEDIUM">Medium</option>
                                <option value="HIGH">High</option>
                                <option value="CRITICAL">Critical</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0 md:w-1/2">
                        <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2 dark:text-gray-200" htmlFor="grid-last-name">
                            Date *
                        </label>
                        <DatePicker
                            onChange={date => setDate(date)}
                            disabledDate={disabledDate}
                            needConfirm={false}
                            className="dark:text-gray-400 bg-gray-200 border-2 border-gray-400 text-gray-900 text-sm rounded  block w-full p-2.5 dark:bg-[#29292E] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                            value={date}
                            suffixIcon={<CalendarIcon width="16" height="16"/>} 

                        />
                    </div>

                    <div className="w-full px-3 mb-6 md:mb-0 md:w-1/2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-200" htmlFor="grid-last-name">
                            Hour *
                        </label>
                        <TimePicker
                            onChange={handleHourChange}
                            defaultOpenValue={dayjs('00:00', 'HH:mm')}
                            value={hour}
                            className="text bg-gray-200 border-2 border-gray-400 text-gray-900 text-sm rounded  block w-full p-2.5 dark:bg-[#29292E] dark:border-gray-600 dark:text-gray-400"
                            placeholder="Select a time"
                            format="HH:mm"
                            suffixIcon={<ClockIcon width="16" height="16"/>} 
                        />
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-200" htmlFor="grid-password">
                            Description
                        </label>
                        <textarea className="resize-none appearance-none block w-full py-3 px-4 mb-3 text bg-gray-200 border-2 border-gray-400 text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-[#29292E] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  input-field " id="grid-password" placeholder="Enter a description here..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className=" border-2 border-gray-800 py-3 px-3 mx-2 rounded-lg hover:bg-gray-800 hover:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-800 dark:border-gray-200">
                        Add quote
                    </button>
                </div>
            </form>
        </div>
    );
};

export default QuoteForm;
