import React from 'react';
import {QuotationDto} from './dto.ts';
import {ScrollView, Text, View} from 'react-native';
import styles from './styles.ts';

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
        {quotes.map(quotation => (
          <View style={styles.row} key={quotation.tradeId}>
            <Text style={[styles.cell, styles.firstColumn]}>{quotation.symbol}</Text>
            <Text style={[styles.cell, styles.evenColumn]}>{quotation.price}</Text>
            <Text style={styles.cell}>{quotation.bestBidPrice}</Text>
            <Text style={[styles.cell, styles.evenColumn]}>{'выч'}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default QuoteList;
