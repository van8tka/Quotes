import React from 'react';
import {Text, View} from 'react-native';
import {mainStyles} from '@app/styles/mainStyles.ts';
import styles from './styles.ts';

const AboutScreen = () => {
  const description = 'Тестовое приложение для отображения котировок валют с периодичностью обновления данных каждые 5 сек';
  return (
    <View style={mainStyles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>{description}</Text>
      </View>
    </View>
  );
};

export default AboutScreen;


