import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AppTabScreens} from './screens.ts';
import { vs } from 'react-native-size-matters';
import AboutScreen from '../../pages/About/AboutScreen.tsx';
import QuotesScreen from '../../pages/Quotes/QuotesScreen.tsx';

const Tab = createBottomTabNavigator();

const AppTabNavigator = () => {
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarIcon: () => null,
          tabBarLabelStyle: {
            fontSize: vs(13),
          },
          tabBarItemStyle: {
            marginTop: -vs(12),
          },
        }}
      >
        <Tab.Screen name={AppTabScreens.AboutScreen} component={AboutScreen} />
        <Tab.Screen name={AppTabScreens.QuotesScreen} component={QuotesScreen} />
      </Tab.Navigator>
  );
};

export default AppTabNavigator;

