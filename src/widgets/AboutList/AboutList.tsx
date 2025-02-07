import React from 'react';
import {FlatList, ListRenderItemInfo, Text} from 'react-native';
import {aboutInfo} from '@processes/about.ts';
import styles from './styles';

const AboutList = () => {

  function renderItem(item: ListRenderItemInfo<string>) {
    return <Text style={styles.item}>{item.item}</Text>;
  }

  return <FlatList data={aboutInfo} renderItem={renderItem}/>;
};

export default AboutList;
