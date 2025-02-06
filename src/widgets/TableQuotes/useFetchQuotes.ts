import { useEffect } from 'react';
import {QuotesStore} from './QuotesStore.ts';

const useFetchQuotes = (quotesStore: QuotesStore) => {

  const intervalFetchData = 5000;

  useEffect(() => {
    const fetchData = async () => {
      await quotesStore.fetchQuotes();
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, intervalFetchData);

    return () => clearInterval(interval);
  }, [quotesStore]);
};

export default useFetchQuotes;
