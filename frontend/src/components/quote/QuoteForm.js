import React, { useState } from "react";
import { DatePicker } from 'antd';
import dayjs from "dayjs";
import { createQuote } from "../../backend/quoteService";
import { TimePicker } from 'antd';
import ClockIcon from "../../icons/ClockIcon";
import CalendarIcon from "../../icons/CalendarIcon";
import { Button } from "@material-tailwind/react";
import { toast } from "react-toastify";
import useQuoteStore from "../store/useQuoteStore";



const QuoteForm = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [importance, setImportance] = useState("");
    const [date, setDate] = useState(null);
    const [hour, setHour] = useState(dayjs('12:00', 'HH:mm'));
    const [endDate, setEndDate] = useState(null);
    const [endHour, setEndHour] = useState(dayjs('12:00', 'HH:mm'));

    const [endDateDisabled, setEndDateDisabled] = useState(false);

    const [hasError, setHasError] = useState(false);

    const { setQuotes } = useQuoteStore();


    const disableBeforeToday = (current) => {
        return current && current < dayjs().startOf('day');
    }

    const disabledEndDate = (current) => {
        if (date && current && current < date.startOf('day')) {
            return true;
        }

        return current && current < dayjs().startOf('day');
    }

    const disabledEndHours = (current) => {
        if (endDate && date && dayjs(date).isSame(endDate, 'day')) {
            return current && current.hour() > hour.hour();
        }
        return false;
    }

    function getParams(date, endDate) {
        const quote = {
            title,
            description,
            date: date.toISOString(),
            endDate: endDate.toISOString(),
            importance
        };
        return quote;
    }

    const onSuccess = (quote) => {
        console.log("QUOTE CREATED");
        setQuotes((prevQuotes) => [...prevQuotes, quote]);
    }

    const onErrors = () => {
        console.log("ERROR");
    }

    const handleSubmit = (e) => {
        //e.preventDefault();
        if (date.toISOString() === endDate.toISOString() && hour.hour() > endHour.hour()) {
            setEndDate("");
            setHasError(true); 
            toast.error("End date must be after start date");
            return;
        }

        const combinedDateTime = dayjs(date).set('hour', hour.hour()).set('minute', hour.minute());
        const combinedEndDateTime = dayjs(endDate).set('hour', endHour.hour()).set('minute', endHour.minute());
        const quote = getParams(combinedDateTime, combinedEndDateTime);
        createQuote(quote,() =>  onSuccess(quote), onErrors);
    }


    return (
        <div className="grid items-right gap-x-4 p-4 px-3 py-2 mt-5">
            <form className="w-full max-w-lg" >
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2 dark:text-gray-200" htmlFor="grid-last-name">
                            Title *
                        </label>
                        <input className="bg-gray-200 border-2 border-gray-400 text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-900/10 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white input-field focus:ring-gray-600 dark:focus:ring-gray-200" id="grid-first-name" type="text" placeholder="A title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="text-gray-900 text-xs font-bold mb-2 dark:text-gray-200 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            Importance
                        </label>
                        <div className="relative">
                            <select
                                className="block appearance-none w-full py-3 px-4 pr-8 rounded leading-tight text bg-gray-200 border-2 border-gray-400 text-gray-900 dark:text-gray-200 text-sm rounded block w-full p-2.5 dark:bg-gray-900/10 dark:border-gray-600 dark:text-gray-400 input-field focus:ring-gray-600 dark:focus:ring-gray-200 " id="grid-state"
                                value={importance}
                                onChange={(e) => setImportance(e.target.value)}
                                variant="outlined"
                            >
                                <option className="dark:bg-gray-900/95 dark:text-gray-900 dark:text-white" value="LOW">Low</option>
                                <option className="dark:bg-gray-900/95 dark:text-gray-900 dark:text-white" value="MEDIUM">Medium</option>
                                <option className="dark:bg-gray-900/95 dark:text-gray-900 dark:text-white" value="HIGH">High</option>
                                <option className="dark:bg-gray-900/95 dark:text-gray-900 dark:text-white" value="CRITICAL">Critical</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0 md:w-1/2">
                        <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2 dark:text-gray-200" htmlFor="grid-last-name">
                            Start date *
                        </label>
                        <DatePicker
                            onChange={date => setDate(date)}
                            needConfirm={false}
                            className="text bg-gray-200 border-2 border-gray-400 text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-900/10 dark:border-gray-600 dark:text-white"
                            value={date}
                            suffixIcon={<CalendarIcon width="16" height="16" />}
                            disabledDate={disableBeforeToday}
                        />
                    </div>

                    <div className="w-full px-3 mb-6 md:mb-0 md:w-1/2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-200" htmlFor="grid-last-name">
                            Start hour *
                        </label>
                        <TimePicker
                            onChange={(e) => setHour(e)}
                            defaultOpenValue={dayjs('00:00', 'HH:mm')}
                            value={hour}
                            className="placeholder-red-900 bg-gray-200 border-2 border-gray-400 text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-900/10 dark:border-gray-600 dark:text-gray-200"
                            placeholder="Select a time"
                            format="HH:mm"
                            suffixIcon={<ClockIcon width="16" height="16" />}
                        />
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0 md:w-1/2">
                        <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2 dark:text-gray-200" htmlFor="grid-last-name">
                            End date *
                        </label>
                        <DatePicker
                            onChange={date => { setEndDate(date) }}
                            disabled={endDateDisabled}
                            disabledDate={disabledEndDate}
                            needConfirm={false}
                            className="text bg-gray-200 border-2 border-gray-400 text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-900/10 dark:border-gray-600 dark:text-gray-200"
                            value={endDate}
                            suffixIcon={<CalendarIcon width="16" height="16" />}

                        />
                    </div>

                    <div className="w-full px-3 mb-6 md:mb-0 md:w-1/2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-200" htmlFor="grid-last-name">
                            End hour *
                        </label>
                        <TimePicker
                            onChange={(e) => setEndHour(e)}
                            defaultOpenValue={dayjs('00:00', 'HH:mm')}
                            value={endHour}
                            disabled={endDateDisabled}
                            disabledTime={disabledEndHours}
                            className="bg-gray-200 border-2 border-gray-400 text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-900/10 dark:border-gray-600 dark:text-gray-200"
                            placeholder="Select a time"
                            format="HH:mm"
                            suffixIcon={<ClockIcon width="16" height="16" />}
                        />
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-200" htmlFor="grid-password">
                            Description
                        </label>
                        <textarea className="resize-none appearance-none block w-full py-3 px-4 mb-3 text bg-gray-200 border-2 border-gray-400 text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-900/10 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white input-field focus:ring-gray-600 dark:focus:ring-gray-600" id="grid-password" placeholder="Enter a description here..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex justify-end">
                    <Button
                        fullWidth
                        type="submit"
                        onClick={handleSubmit}
                        className=" border-2 border-gray-800 py-3 px-3 hover:bg-gray-800 hover:text-gray-200 dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-400 dark:hover:text-gray-700 dark:border-gray-300 dark:hover:border-gray-400">
                        Add quote
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default QuoteForm;
