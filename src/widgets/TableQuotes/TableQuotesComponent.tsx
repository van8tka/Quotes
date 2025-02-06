import React from 'react';
import {Text, View} from 'react-native';
import useFetchQuotes from './useFetchQuotes.ts';
import QuoteList from './QuotesList.tsx';
import {observer} from 'mobx-react';
import quotesStore from './QuotesStore.ts';
import Loader from '../../entities/Loader/Loader.tsx';
import styles from './styles.ts';

const TableQuotesComponent = observer(() => {
 const tableName = 'Котировки с биржи poloniex';
  useFetchQuotes(quotesStore);

  return (
    <View>
      <Text style={styles.tableName}>{tableName}</Text>
      {quotesStore.loading && quotesStore.quotes.length === 0 && <Loader />}
      {quotesStore.error && <Text>Error: {quotesStore.error}</Text>}
      {quotesStore.quotes.length > 0 && <QuoteList quotes={quotesStore.quotes} />}
    </View>
  );
});

export default TableQuotesComponent;

