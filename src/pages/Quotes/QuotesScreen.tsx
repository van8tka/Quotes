import React from 'react';
import {View} from 'react-native';
import {mainStyles} from '@app/styles/mainStyles.ts';
import TableQuotesComponent from '@widgets/TableQuotes/TableQuotesComponent.tsx';

const QuotesScreen = () => {
  return (
    <View style={mainStyles.container}>
      <TableQuotesComponent/>
    </View>
  );
};

export default QuotesScreen;


