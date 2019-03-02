import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import HomeScreen from './tabs/Home';
import ProductScreen from './tabs/Product';
import HistoryScreen from './tabs/History';
import StatisticsScreen from './tabs/Statistics'



export default class App extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs>
          <Tab heading="Home">
            <HomeScreen />
          </Tab>
          <Tab heading="Products">
            <ProductScreen />
          </Tab>
          <Tab heading="History">
          <HistoryScreen/>
          </Tab>
          <Tab heading="Statistics">
          <StatisticsScreen/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
