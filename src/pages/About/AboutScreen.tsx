import React from 'react';
import {Text, View} from 'react-native';
import {mainStyles} from '@app/styles/mainStyles.ts';
import styles from './styles.ts';
import AboutList from '@widgets/AboutList/AboutList.tsx';

const AboutScreen = () => {
  const description = 'Тестовое приложение для отображения котировок валют';
  return (
    <View style={mainStyles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>{description}</Text>
        <AboutList/>
      </View>
    </View>
  );
};

export default AboutScreen;


