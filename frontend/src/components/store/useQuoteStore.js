// store/useQuoteStore.js
import create from 'zustand';

const useQuoteStore = create((set) => ({
  quotes: [],
  userQuotes : [],

  // All quotes
  setQuotes: (newQuotes) => set({ quotes: newQuotes }),

  removeQuote: (quoteId) => {
    set((state) => ({
      quotes: state.quotes.filter((quote) => quote.id !== quoteId),
    }));
  },

  // Quotes by user id
  getUserQuotes: (userId) => {
    set((state) => ({
      userQuotes: state.quotes.filter((quote) => quote.userDto.id === userId),
    }));
  },

  setUserQuotes: (quotes) => set({ userQuotes: quotes }),


}));

export default useQuoteStore;

