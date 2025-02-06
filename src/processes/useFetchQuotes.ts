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
      console.log('+++ repeat');
      fetchData();
    }, intervalFetchData);

    return () => {
        console.log('+++ clear');
      clearInterval(interval);
    };
  }, [quotesStore]);
};

export default useFetchQuotes;
