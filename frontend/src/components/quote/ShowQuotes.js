import React, { useEffect, useState } from 'react';
import { useQuoteStore } from '../store/useQuoteStore';

const ShowQuotes = () => {

    const { fetchQuotes, quotes } = useQuoteStore(); 

    const onSuccess = () => {console.log("success")}
    const onErrors = () => {console.log("errors")}

    // useEffect(() => {
    //     console.log("Quotes:", quotes);

    //     const onSuccess = () => {
    //         console.log("hago el fetch");
    //     };

    //     const onErrors = (errors) => {
    //         console.error("Error fetching quotes:", errors);
    //     };

    //     fetchQuotes().then(onSuccess).catch(onErrors);
    // }, [fetchQuotes, quotes]);

    
    return(
        <>
            {quotes && quotes.length > 0 ? (
                <ul>
                {quotes.map((quote, index) => (
                  <li key={index}>
                    <p>Title: {quote.title}</p>
                    <p>Description: {quote.description}</p>
                    {/* Agrega más campos aquí según tus necesidades */}
                  </li>
                ))}
              </ul>
            ) : (
                <p>No quotes available</p>
            )}
        </>
    );

};

export default ShowQuotes;