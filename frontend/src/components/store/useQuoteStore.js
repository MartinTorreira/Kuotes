import { create } from 'zustand'
import { getQuotes, createQuote } from '../../backend/quoteService.js'   

export const useQuoteStore = create((set) => ({

    quotes: [],
    setQuotes: (quotes) => set({ quotes }),



    fetchQuotes: async () => {
		try {
			getQuotes(
				(data) => {
					set({ quotes: data.content });
				},
				(errors) => {
					console.log(errors);
				},
			);
		} catch (error) {
			console.error(error);
		}
	},

  

}));