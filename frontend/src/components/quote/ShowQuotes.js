import React, { useEffect } from 'react';
import useQuoteStore from '../store/useQuoteStore';
import { getQuotes, deleteQuote } from '../../backend/quoteService.js';
import { lowerCaseExceptFirst } from '../utils/Typography.js';

const ShowQuotes = () => {
    const { quotes, setQuotes } = useQuoteStore();

    const removeQuote = (quote) => {
        deleteQuote(quote.id);
    };

    const onSuccess = (quoteList) => {
        const sortedQuotes = [...quoteList].sort((a, b) => new Date(b.date) - new Date(a.date));
        setQuotes(sortedQuotes);
    };

    const onErrors = () => {
        console.log("errors");
    };

    useEffect(() => {
        getQuotes(onSuccess, onErrors);
    }, []);

    const getImportanceColor = (importance) => {
        switch (importance) {
            case 'CRITICAL':
                return "text-red-800 dark:text-red-500";
            case 'IMPORTANT':
                return 'text-yellow-800 dark:text-yellow-500';
            case 'MEDIUM':
                return 'text-blue-800 dark:text-blue-500 ';
            case 'LOW':
                return 'text-green-800 dark:text-green-500 ';
            default:
                return 'text-gray-800 dark:text-gray-500 ';
        }
    };

    function dateConverter(param) {
        const date = new Date(param);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}h`;
    };

    return (
        <>
            <div className='mt-20 flex flex-row items-center justify-center gap-x-2'>
                <h1 className="text-center font-bold text-3xl text-gray-900 dark:text-gray-100 mt-5 mb-10 p-2">Your tasks</h1>
                <svg className='mb-4' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3.5 5.5l1.5 1.5l2.5 -2.5" /><path d="M3.5 11.5l1.5 1.5l2.5 -2.5" /><path d="M3.5 17.5l1.5 1.5l2.5 -2.5" /><path d="M11 6l9 0" /><path d="M11 12l9 0" /><path d="M11 18l9 0" /></svg>
            </div>
            <div className="shadow-xl md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto max-h-[400px] overflow-y-auto">
                <ul>
                    {quotes.map((quote, index) => (
                        <li key={index} className={index > 0 ? "cursor-pointer hover:bg-gray-100 dark:hover:bg-opacity-30 dark:hover:bg-[#332e38] border-t border-gray-100 dark:border-gray-700 transition duration-300 ease-in-out" : "dark:hover:bg-[#332e38] dark:hover:bg-opacity-30 cursor-pointer hover:bg-gray-100 hover:bg-opacity-100 transition duration-300 ease-in-out"}>
                            <div className="px-2 py-3 sm:px-6 flex items-center justify-between">
                                <div>
                                    <h3 className="sm:text-lg leading-6 text-gray-900 dark:text-gray-200 ">{quote.title}</h3>
                                    <p className="mt-1 max-w-xs sm:max-w-2xl text-xs sm:text-xxs text-gray-400 dark:text-gray-00 ">{dateConverter(quote.date)}</p>
                                </div>
                                <div className="flex items-center gap-x-1">
                                    
                                    <button onClick={() => removeQuote(quote)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24" className='hover:fill-red-600 dark:hover:fill-red-600 dark:fill-gray-200'>
                                            <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 20 C 5 21.1 5.9 22 7 22 L 17 22 C 18.1 22 19 21.1 19 20 L 19 7 L 5 7 z M 8 9 L 10 9 L 10 20 L 8 20 L 8 9 z M 14 9 L 16 9 L 16 20 L 14 20 L 14 9 z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ShowQuotes;
