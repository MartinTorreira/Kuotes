// store/useQuoteStore.js
import create from 'zustand';

const useQuoteStore = create((set) => ({
  quotes: [],
  setQuotes: (newQuotes) => set({ quotes: newQuotes }),
}));

export default useQuoteStore;

