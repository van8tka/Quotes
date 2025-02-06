import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import QuotesStore from './QuotesStore.ts';
import useFetchQuotes from './useFetchQuotes.ts';
import QuoteList from './QuotesList.tsx';

const TableQuotesComponent = () => {

  const quotesStore = new QuotesStore();

  useFetchQuotes(quotesStore);

  useEffect(() => {
    console.log('++GG+++',quotesStore.quotes);
  }, [quotesStore.quotes]);

  return (
    <View style={{flex: 1}}><Text>{'table'}</Text>
      {quotesStore.loading && <Text>Loading...</Text>}
      {quotesStore.error && <Text>Error: {quotesStore.error}</Text>}
      <QuoteList quotes={quotesStore.quotes} />
    </View>
  );
};

export default TableQuotesComponent;

