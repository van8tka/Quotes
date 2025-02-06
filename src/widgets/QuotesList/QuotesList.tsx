import React, {memo} from 'react';
import {QuotationDto} from '../../processes/dto.ts';
import {ScrollView, View} from 'react-native';
import styles from './styles.ts';
import {getQuotationData} from '../../processes/model.ts';
import quotesStore from '../../processes/QuotesStore.ts';
import TableHeader from '../../features/TableHeader/TableHeader.tsx';
import TableErrorRow from '../../features/TableErrorRow/TableErrorRow.tsx';
import AnimatedTableRow from '../../features/AnimatedTableRow/AnimatedTableRow.tsx';

interface QuoteListProps {
  quotes: QuotationDto[];
  hasError: boolean;
}

const QuoteList: React.FC<QuoteListProps> = ({ quotes, hasError }) => {

  return (
    <ScrollView>
      <View style={styles.table}>
        <TableHeader />
        {hasError && <TableErrorRow />}
        {quotes.map(quotation => {
          const previousQuotation = quotesStore.cachedQuotes.find(item => item.symbol === quotation.symbol);
          const itemQuotation = getQuotationData(quotation, parseFloat(previousQuotation?.price ?? '0'));
          return (<AnimatedTableRow key={quotation.symbol} quotation={itemQuotation} />);
        }
        )}
      </View>
    </ScrollView>
  );
};

export default memo(QuoteList);
