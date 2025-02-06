import React from 'react';
import {Text, View} from 'react-native';
import useFetchQuotes from '../../processes/useFetchQuotes.ts';
import QuoteList from '../QuotesList/QuotesList.tsx';
import {observer} from 'mobx-react';
import quotesStore from '../../processes/QuotesStore.ts';
import Loader from '../../entities/Loader/Loader.tsx';
import styles from './styles.ts';

const TableQuotesComponent = observer(() => {

  const tableName = 'Котировки с биржи poloniex';

  useFetchQuotes(quotesStore);

  return (
    <View style={styles.container}>
      <Text style={styles.tableName}>{tableName}</Text>
      {quotesStore.loading &&
        (quotesStore.quotes.length === 0 || quotesStore.error) && <Loader />}
      {quotesStore.quotes.length > 0 && <QuoteList quotes={quotesStore.quotes} hasError={!!quotesStore.error} />}
    </View>
  );
});

export default TableQuotesComponent;

