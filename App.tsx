import React from 'react';
import AppTabNavigator from './src/app/navigation/AppTabNavigator.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, useColorScheme} from 'react-native';
import {mainStyles} from './src/app/styles/mainStyles.ts';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
        <StatusBar
          barStyle= {isDarkMode ? 'light-content' : 'dark-content'}
        />
          <SafeAreaProvider>
            <SafeAreaView style={mainStyles.safeArea}>
              <AppTabNavigator />
            </SafeAreaView>
          </SafeAreaProvider>
    </NavigationContainer>
  );
}


export default App;
