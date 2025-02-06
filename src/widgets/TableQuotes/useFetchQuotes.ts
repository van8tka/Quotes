import { useEffect } from 'react';
import {QuotesStore} from './QuotesStore.ts';

const useFetchTrades = (quotesStore: QuotesStore) => {

  const intervalFetchData = 5000;

  useEffect(() => {
    const fetchData = async () => {
      await quotesStore.fetchQuotes();
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, intervalFetchData); // 5000 мс = 5 секунд

    return () => clearInterval(interval);
  }, [quotesStore]); // Зависимость от tradeStore
};

export default useFetchTrades;
