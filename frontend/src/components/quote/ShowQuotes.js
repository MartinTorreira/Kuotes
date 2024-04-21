import React, { useEffect, useState } from 'react';
import useQuoteStore from '../store/useQuoteStore';
import { deleteQuote } from '../../backend/quoteService.js';
import { importanceBg, lowerCaseExceptFirst } from '../utils/Typography.js';
import { dateConverter } from '../utils/DateUtils.js';
import { useContext } from 'react';
import { LoginContext } from '../user/LoginContext.js';
import { config } from '../../config/constants.js';
import QuoteForm from './QuoteForm.js';
import CloseIcon from '../../icons/CloseIcon.js';
import TaskIcon from '../../icons/TaskIcon.js';
import DeleteQuote from '../../icons/DeleteQuote.js';
import { Button } from "@material-tailwind/react";

const ShowQuotes = () => {
    const { quotes, removeQuote } = useQuoteStore();
    const [expandedId, setExpandedId] = useState(null);

    const [isOpen, setIsOpen] = useState(false);
    const { token, setToken, setUser } = useContext(LoginContext);

    const [hasError, setHasError] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
        setHasError(false);
    };

    const toggleAccordion = (quoteId) => {
        setExpandedId(expandedId === quoteId ? null : quoteId);
    };


    useEffect(() => {
        const bearer = localStorage.getItem(config.SERVICE_TOKEN_NAME);
        const user = localStorage.getItem("user");
        if (bearer != null) {
            setToken(bearer);
            setUser(JSON.parse(user));
        }
    }, [setToken, setUser, token]);


    const handleDeleteQuote = async (quoteId) => {
        try {
            await deleteQuote(quoteId);
            removeQuote(quoteId);
        } catch (error) {
            console.error("Error al eliminar la cita:", error);
        }
    };

    // const onSuccess = (quoteList) => {
    //     const sortedQuotes = [...quoteList].sort((a, b) => new Date(b.date) - new Date(a.date));
    //     setQuotes(sortedQuotes);
    // };

    // const onErrors = () => {
    //     console.log("errors");
    // };


    return (
        <>
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-20">
                    <div className="modal-overlay absolute w-full h-full backdrop-filter backdrop-blur-[5px]" onClick={toggleModal}></div>
                    <div className="modal-container bg-white mx-auto rounded shadow-lg z-50 border-2 border-gray-300 dark:border-gray-600 transition-all w-full sm:max-w-lg md:max-w-lg">
                        <div className="p-4 modal-content text-left dark:bg-[#29292E] bg-gray-200"  >
                            <div className="modal-header flex justify-between items-center pb-3" >
                                <h3 className="text-3xl font-bold">Create a quote</h3>
                                <button className="modal-close" onClick={toggleModal}>
                                    <CloseIcon />
                                </button>
                            </div>
                            <div className="modal-fade"  >
                                <QuoteForm hasError={hasError} />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className='mt-20 flex flex-row items-center justify-center gap-x-2'>
                <h1 className="text-center font-bold text-3xl text-gray-900 dark:text-gray-100 mt-5 mb-10 p-2  underline underline-offset-8 decoration-green-400">Your quotes</h1>
            </div>
            <div className="shadow-xl md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto max-h-[400px] overflow-y-auto ">
                <ul>
                    {quotes.map((quote, index) => (
                        <li key={index}
                            className={index > 0 ? "cursor-pointer hover:bg-gray-100 dark:hover:bg-opacity-30 dark:hover:bg-[#332e38] border-t border-gray-200 dark:border-gray-700/40 transition duration-300 ease-in-out" : "dark:hover:bg-[#332e38] dark:hover:bg-opacity-30 cursor-pointer hover:bg-gray-100 hover:bg-opacity-100 transition duration-300 ease-in-out"}
                            onClick={() => toggleAccordion(quote.id)}>
                            {quote.userDto.id === JSON.parse(localStorage.getItem("user")).id ?
                                <div className="px-2 py-3 sm:px-6 flex items-center justify-between">
                                    <div className=''>
                                        <h3 className="sm:text-lg leading-6 text-gray-900 dark:text-gray-200 ">{quote.title}</h3>
                                        <div className='flex flex-row gap-x-2 items-center justify-start'>
                                            <p className="mt-1 max-w-xs sm:max-w-2xl text-xs sm:text-xxs text-gray-500 dark:text-gray-400">{dateConverter(quote.date)}</p>
                                            <span className={`${importanceBg(quote.importance)} rounded-full text-xs px-1 mt-1`}>
                                                {lowerCaseExceptFirst(quote.importance)}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-x-1">
                                        <button onClick={() => handleDeleteQuote(quote.id)}>
                                            <DeleteQuote />
                                        </button>
                                    </div>
                                </div> : null
                            }
                            {expandedId === quote.id && (
                                <div className="px-2 py-3 sm:px-6">
                                    <p className="text-sm text-gray-600 dark:text-gray-200">{quote.description}</p>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="relative flex items-center gap-4 mt-6">
                <Button className="flex items-center gap-3 relative z-10 text-gray-800 bg-gray-200 dark:text-gray-200 dark:bg-gray-900 hover:scale-105 transition-all" onClick={toggleModal}>
                    <TaskIcon width="20" height="20" className="dark:text-gray-200 text-gray-800" />
                    Add quote
                </Button>
            </div>
        </>
    );


};

export default ShowQuotes;
