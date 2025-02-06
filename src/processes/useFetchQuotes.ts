import {QuotesStore} from './QuotesStore.ts';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';

const useFetchQuotes = (quotesStore: QuotesStore) => {

  const intervalFetchData = 5000;

  useFocusEffect(useCallback(() => {
    const fetchData = async () => {
      await quotesStore.fetchQuotes();
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, intervalFetchData);

    return () => {
      clearInterval(interval);
    };
  }, [quotesStore]));
};

export default useFetchQuotes;
