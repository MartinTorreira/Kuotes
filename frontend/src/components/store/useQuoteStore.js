// store/useQuoteStore.js
import create from 'zustand';

const useQuoteStore = create((set) => ({
  quotes: [],
  setQuotes: (newQuotes) => set({ quotes: newQuotes }),

  removeQuote: (quoteId) => {
    set((state) => ({
      quotes: state.quotes.filter((quote) => quote.id !== quoteId),
    }));
  },

}));

export default useQuoteStore;

