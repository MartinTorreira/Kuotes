import React, { useEffect } from 'react';
import useQuoteStore from '../store/useQuoteStore';
import { getQuotes, deleteQuote } from '../../backend/quoteService.js';

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
                return "text-red-800";
            case 'IMPORTANT':
                return 'text-yellow-800 ';
            case 'MEDIUM':
                return 'text-blue-800 ';
            case 'LOW':
                return 'text-green-800 ';
            default:
                return 'text-gray-800 ';
        }
    };

    function dateConverter(param) {
        const date = new Date(param);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}h`;
    };

    return (
        <div className="bg-white dark:bg-[#28242c] shadow mt-20 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto max-h-[400px] overflow-y-auto ">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 px-4 py-2 border-b border-gray-200 text-center bg-gray-100 dark:bg-[#332e38] border dark:border-gray-700 ">Active quotes</h2>
            <ul>
                {quotes.map((quote, index) => (
                    <li key={index} className={index > 0 ? "cursor-pointer hover:bg-gray-50 dark:hover:bg-[#332e38] border-t border-gray-200 dark: border-gray-700 transition duration-300 ease-in-out" : "dark:hover:bg-[#332e38] cursor-pointer hover:bg-gray-50"}>
                        <div className="px-2 py-3 sm:px-6">
                            <div className="flex items-center justify-between">
                                <h3 className="sm:text-lg leading-6 text-gray-900 dark:text-gray-200 ">{quote.title}</h3>
                                <p className="mt-1 max-w-xs sm:max-w-2xl text-xs sm:text-xxs text-gray-400 dark:text-gray-00 ">{dateConverter(quote.date)}</p>
                            </div>
                            <div className="mt-2 flex items-center justify-between">
                                <p className={`bg-gray-200 rounded-full px-2 py-1 mt-1 max-w-xs sm:max-w-2xl text-xs sm:text-xxs text-gray-500 ${getImportanceColor(quote.importance)}`}>
                                    <span>{quote.importance}</span>
                                </p>
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
    );
};

export default ShowQuotes;
