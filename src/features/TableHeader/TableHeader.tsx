import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const TableHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={[styles.headerText, styles.firstColumn]}>Ticker Symbol</Text>
      <Text style={styles.headerText}>Last</Text>
      <Text style={styles.headerText}>Highest Bid</Text>
      <Text style={styles.headerText}>Percent Change</Text>
    </View>
  );
};

export default TableHeader;
