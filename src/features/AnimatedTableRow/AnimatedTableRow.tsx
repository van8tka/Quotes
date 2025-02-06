import {Animated, Text} from 'react-native';
import React, {useEffect} from 'react';
import {QuotationModel} from '../../processes/model.ts';
import styles from './styles.ts';

interface TableRowProps {
  quotation: QuotationModel
}

const AnimatedTableRow = ({ quotation }: TableRowProps) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();
  }, [quotation]);

  return (
    <Animated.View style={[styles.row, {opacity: fadeAnim}]}>
      <Text style={[styles.cell, styles.firstColumn]}>{quotation.symbol}</Text>
      <Text style={[styles.cell, styles.evenColumn]}>{quotation.price}</Text>
      <Text style={styles.cell}>{quotation.bestBidPrice}</Text>
      <Text style={[styles.cell, styles.evenColumn]}>{`${quotation.percentChange} %`}</Text>
    </Animated.View>
  );
};

export default AnimatedTableRow;
