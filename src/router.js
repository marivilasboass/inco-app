import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {SignInScreen} from './screens';
import {HomeScreen} from './screens';

const AppMainRoute = createStackNavigator(
  {
    SignIn: SignInScreen,
    Home: HomeScreen,
  },
  {
    initialRouteName: 'SignIn',
    defaultNavigationOptions: {header: null},
  },
);

const AppNavigator = createSwitchNavigator(
  {
    App: AppMainRoute,
  },
  {
    initialRouteName: 'App',
  },
);

export default createAppContainer(AppNavigator);
