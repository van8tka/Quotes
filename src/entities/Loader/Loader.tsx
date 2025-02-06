
import React from 'react';
import LottieView from 'lottie-react-native';
import {View} from 'react-native';
import LoaderAnimation from '../../shared/assets/loader.json';
import styles from './styles.ts';

const Loader = ()=> {

    return (
      <View style={styles.container}>
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
