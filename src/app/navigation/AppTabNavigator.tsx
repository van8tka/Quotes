import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AppTabScreens} from './screens.ts';
import AboutScreen from '../../pages/About/AboutScreen.tsx';
import QuotesScreen from '../../pages/Quotes/QuotesScreen.tsx';

const Tab = createBottomTabNavigator();

const AppTabNavigator = () => {
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarIcon: () => null,
          tabBarLabelStyle: {
            fontSize: 16,
          },
          tabBarItemStyle: {
            marginTop: -16,
          },
        }}
      >
        <Tab.Screen name={AppTabScreens.AboutScreen} component={AboutScreen} />
        <Tab.Screen name={AppTabScreens.QuotesScreen} component={QuotesScreen} />
      </Tab.Navigator>
  );
};

export default AppTabNavigator;

