import React, { Component } from 'react';
import { Text, View, SafeAreaView, ImageBackground, StatusBar } from 'react-native';
import { Container, Header, Left, Title, Right, Body, Button, Icon } from 'native-base';


import {
  createAppContainer,
  createMaterialTopTabNavigator,
} from 'react-navigation';

import HomeScreen from './tabs/Home';
import ProductScreen from './tabs/Product';
import HistoryScreen from './tabs/History';
import StatisticsScreen from './tabs/Statistics'

export default class App extends Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground source={require('./gradient.jpg')} style={{ flex: 1, width: null }}>
          <Container style={{ backgroundColor: 'transparent' }}>
            <Header noLeft noShadow
              indicatorStyle={{ backgroundColor: 'white', height: 3, }} 
              style={{ backgroundColor: 'rgba(52, 52, 52, 0.4)', height: 60 }}>
              <Left></Left>
              <Body>
                <Title>Header</Title>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name='settings' />
                </Button>
              </Right>
            </Header>
            <AppContainer />
          </Container>
        </ImageBackground>
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
        fontSize: 13,
        fontWeight: 'bold',
        margin: 0,
        padding: 0
      },

      tabStyle: {
        height: 50,

      },
      indicatorStyle: {
        backgroundColor: 'white',
        height: 3,
      },
      style: {
        backgroundColor: 'rgba(52, 52, 52, 0.4)',
        elevation: 0,
      },
      initialRouteName: 'Home',
    }
  });

const AppContainer = createAppContainer(TabNavigator);
