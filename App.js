import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { Container, Header, Left, Title, Right, Body, Button, Icon } from 'native-base';
import { createAppContainer, createMaterialTopTabNavigator, } from 'react-navigation';
import HomeScreen from './screens/Home';
import ProductScreen from './screens/Product';
import HistoryScreen from './screens/History';
import StatisticsScreen from './screens/Statistics'
import LinearGradient from 'react-native-linear-gradient';

export default class App extends Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  render() {
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 0.6, 1.0]}
        colors={['#9f95f0', '#71ceef', '#80e8ed']}
        style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
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
                  <Icon style={{fontSize:30}} type='AntDesign' name='setting' />
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
      activeTintColor: 'white',
      upperCaseLabel: false,
      labelStyle: {
        fontSize: 17,
        fontWeight: '300',
        margin: 0,
        padding: 0,

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
