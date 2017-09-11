import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'native-base';
import { Login, Home, Test } from './screens';

const AppNavigator = TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Icon ios={focused ? 'ios-home' : 'ios-home-outline'} android='md-home' />
        )
      }
    },
    Test: {
      screen: Test,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Icon ios={focused ? 'ios-checkmark-circle' : 'ios-checkmark-circle-outline'} android='md-home' />
        )
      }
    }
  },
  {
    initialRouteName: 'Home',
    animationEnabled: true,    
    tabBarOptions: {
      showLabel: false,
      labelStyle: {
        fontSize: 14
      }
    }
  }
);

const createRouter = (signedIn = false) => {
  return StackNavigator(
    {
      Login: {
        screen: Login,
        navigationOptions: {
          title: 'Login'
        }
      },
      App: {
        screen: AppNavigator
      }
    },
    {
      initialRouteName: signedIn ? 'App' : 'Login',
      headerMode: 'none'
    }
  );
}

export default createRouter;
