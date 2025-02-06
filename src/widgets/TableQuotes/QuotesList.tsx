import React from 'react';
import { observer } from 'mobx-react';
import {QuotationDto} from './dto.ts';
import {Text, View} from 'react-native';



interface QuoteListProps {
  quotes: QuotationDto[];
}

const QuoteList: React.FC<QuoteListProps> = observer(({ quotes }) => {

  console.log('+________23', quotes);
  return (
    <View>
      {quotes.map(qoutation => (
          <View key={qoutation.tradeId}>
            <Text> {'Symbol:'}</Text> {qoutation.symbol} |
            <Text> {'Price:'}</Text> {qoutation.price} |
            <Text> {'Size:'}</Text> {qoutation.size}
  </View>
))}
  </View>
);
});

export default QuoteList;
