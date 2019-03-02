import React, { Component } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import {
  createAppContainer,
  createMaterialTopTabNavigator,
} from 'react-navigation';

import HomeScreen from './tabs/Home';
import ProductScreen from './tabs/Product';
import HistoryScreen from './tabs/History';
import StatisticsScreen from './tabs/Statistics'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <AppContainer />
      </SafeAreaView>
    );
  }
}

const TabNavigator = createMaterialTopTabNavigator({
  Home: HomeScreen,
  Products: ProductScreen,
  History: HistoryScreen,
  Statistics: StatisticsScreen,
}, {
    defaultNavigationOptions: {
      headerStyle: {

      }
    },
    tabBarOptions: {
      activeTintColor: '#f2f2f2',
      activeBackgroundColor: '#2EC4B6',
      labelStyle: {
        fontSize: 10,
        fontWeight: 'bold',
      },
      tabStyle: {
        height: 70,
      },
      indicatorStyle: {
        backgroundColor: 'white',
        height: 3,
      },
      style: {
      },
      initialRouteName: 'Home',
    }
  });

const AppContainer = createAppContainer(TabNavigator);
