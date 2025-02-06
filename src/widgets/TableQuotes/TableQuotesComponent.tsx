import React from 'react';
import {Text, View} from 'react-native';
import useFetchQuotes from './useFetchQuotes.ts';
import QuoteList from './QuotesList.tsx';
import {observer} from 'mobx-react';
import quotesStore from './QuotesStore.ts';

const TableQuotesComponent = observer(() => {
 const headerOfTable = 'Котировки с биржи poloniex';
  useFetchQuotes(quotesStore);

  return (
    <View style={{flex: 1}}>
      <Text style={{textAlign: 'center', padding: 10}}>{headerOfTable}</Text>
      {/*//лоадер только при первом запросе и загрузке страницы*/}
      {quotesStore.loading && <Text style={{position: 'absolute'}}>Loading...</Text>}
      {quotesStore.error && <Text>Error: {quotesStore.error}</Text>}
      <QuoteList quotes={quotesStore.quotes} />
    </View>
  );
});

export default TableQuotesComponent;

