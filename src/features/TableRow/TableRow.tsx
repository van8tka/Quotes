import {Text, View} from 'react-native';
import React from 'react';
import {QuotationModel} from '../../processes/model.ts';
import styles from './styles.ts';

interface TableRowProps {
  quotation: QuotationModel
}

const TableRow = ({ quotation }: TableRowProps)=>{
  return (
    <View style={styles.row}>
      <Text style={[styles.cell, styles.firstColumn]}>{quotation.symbol}</Text>
      <Text style={[styles.cell, styles.evenColumn]}>{quotation.price}</Text>
      <Text style={styles.cell}>{quotation.bestBidPrice}</Text>
      <Text style={[styles.cell, styles.evenColumn]}>{`${quotation.percentChange} %`}</Text>
    </View>
  );
};

export default TableRow;
