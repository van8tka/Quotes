
import React from 'react';
import LottieView from 'lottie-react-native';
import {StyleProp, View, ViewStyle} from 'react-native';
import LoaderAnimation from '../../shared/assets/loader.json';
import styles from './styles.ts';

export interface ILoaderProps {
  containerStyle?: StyleProp<ViewStyle>;
}

const Loader = ({containerStyle}: ILoaderProps)=> {

    return (
      <View style={[styles.container, containerStyle]}>
        <LottieView
          source={LoaderAnimation}
          loop={true}
          autoPlay
          resizeMode="center"
          style={styles.loader}
        />
      </View>
    );
};

export default Loader;
