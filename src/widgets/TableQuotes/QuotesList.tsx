import React from 'react';
import {QuotationDto} from './dto.ts';
import {ScrollView, Text, View} from 'react-native';
import styles from './styles.ts';
import {getQuotationData} from './model.ts';
import quotesStore from './QuotesStore.ts';

interface QuoteListProps {
  quotes: QuotationDto[];
}

const QuoteList: React.FC<QuoteListProps> = ({ quotes }) => {

  return (
    <ScrollView>
      <View style={styles.table}>
        <View style={styles.header}>
          <Text style={[styles.headerText, styles.firstColumn]}>Ticker Symbol</Text>
          <Text style={styles.headerText}>Last</Text>
          <Text style={styles.headerText}>Highest Bid</Text>
          <Text style={styles.headerText}>Percent Change</Text>
        </View>
        {quotes.map(quotation => {
          const previousQuotation = quotesStore.cachedQuotes.find(item => item.symbol === quotation.symbol);
          const itemQuotation = getQuotationData(quotation, parseFloat(previousQuotation?.price ?? '0'));
          return (
          <View style={styles.row} key={itemQuotation.symbol}>
            <Text style={[styles.cell, styles.firstColumn]}>{itemQuotation.symbol}</Text>
            <Text style={[styles.cell, styles.evenColumn]}>{itemQuotation.price}</Text>
            <Text style={styles.cell}>{itemQuotation.bestBidPrice}</Text>
            <Text style={[styles.cell, styles.evenColumn]}>{`${itemQuotation.percentChange} %`}</Text>
          </View>
        );}
        )}
      </View>
    </ScrollView>
  );
};

export default QuoteList;
