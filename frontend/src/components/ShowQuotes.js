import React from 'react';
import { getQuotes } from '../backend/quoteService.js'

const ShowQuotes = () => {

    const onSuccess = () => {console.log("success")}
    const onErrors = () => {console.log("errors")}

    const quotes = getQuotes(onSuccess, onErrors);

    return(
        <div>
            <ul>
                {
                    quotes !== null ?
                     quotes.map(
                        {quotes}, (item) => {
                            <li className='flex flex-col px-3 py-3 mt-5 mb-5 text-lg'>
                                {item}
                            </li>
                        }
                     ) 
                
                    : 
                    <div>
                        <h1 className='text-2xl font-bold'>You have no quotes</h1>
                        <a href='/quotes/create'>Create your own quote</a>
                    </div>

                }
            </ul>
        </div>
    );

};

export default ShowQuotes;