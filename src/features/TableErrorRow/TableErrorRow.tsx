import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles.ts';

const TableErrorRow = () => {
  const textError = 'Ошибка получения данных котировки';
  return (
    <View style={styles.row}>
      <Text style={styles.textError}>{textError}</Text>
    </View>
  );
};

export default TableErrorRow;
