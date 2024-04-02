import {
    fetchConfig,
    appFetch,
  } from "./appFetch";


  export const getQuotes = (onSuccess, onErrors) => {
    appFetch(
        "quotes/list",
        fetchConfig("GET"),
        (quotes) => {
            onSuccess(quotes)
        },
        onErrors
    );
  }

  export const createQuote = (quote, onSuccess, onErrors) => {
    appFetch(
        "quotes/create",
        fetchConfig("POST", quote), onSuccess, onErrors
    );
  }


  export const deleteQuote = (quoteId, onSuccess, onErrors) => {
    appFetch(
        `quotes/delete/${quoteId}`,
        fetchConfig("DELETE", onSuccess, onErrors)
    );
  }


  export const editPost = (quoteId, quote, onSuccess, onErrors) => {
    appFetch(
        `quotes/edit/${quoteId}`,
        fetchConfig("PUT", quote, onSuccess, onErrors)
    );
  }


