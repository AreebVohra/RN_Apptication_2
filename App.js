import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { Container, Header, Left, Title, Right, Body, Button, Icon } from 'native-base';
import { createAppContainer, createMaterialTopTabNavigator, } from 'react-navigation';
import HomeScreen from './tabs/Home';
import ProductScreen from './tabs/Product';
import HistoryScreen from './tabs/History';
import StatisticsScreen from './tabs/Statistics'
import LinearGradient from 'react-native-linear-gradient';

export default class App extends Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  render() {
    return (
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9f95f0', '#71ceef', '#80e8ed']} style={styles.linearGradient}>
        <SafeAreaView style={{ flex: 1 }}>
          <Container style={{ backgroundColor: 'transparent' }}>
            <Header noLeft noShadow
              indicatorStyle={{ backgroundColor: 'white', height: 3, }}
              style={{ backgroundColor: 'rgba(52, 52, 52, 0.4)', height: 50 }}>
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
        </SafeAreaView>
      </LinearGradient>
    );
  }
}


const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});

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
        height: 60,
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
