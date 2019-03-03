import React, { Component } from 'react';
import { Text, View, Image, StatusBar, StyleSheet, ImageBackground } from 'react-native';
import { Container, Header, Tab, Tabs, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import HomeScreen from './tabs/Home';
import ProductScreen from './tabs/Product';
import HistoryScreen from './tabs/History';
import StatisticsScreen from './tabs/Statistics'



export default class App extends Component {
  render() {
    return (
      <ImageBackground source={require('./gradient.jpg')} style={styles.container}>
        <StatusBar hidden />
        <StyleProvider style={getTheme(material)}>
          <Container style={{ backgroundColor: 'transparent' }}>
            <Header style={{ backgroundColor: 'rgba(52, 52, 52, 0.4)', height: 60 }} />
            <Tabs >
              <Tab style={{ backgroundColor: 'transparent' }} heading="Home">
                <HomeScreen />
              </Tab>
              <Tab heading="Products">
                <ProductScreen />
              </Tab>
              <Tab heading="History">
                <HistoryScreen />
              </Tab>
              <Tab heading="Statistics">
                <StatisticsScreen />
              </Tab>
            </Tabs>
          </Container>
        </StyleProvider>
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    width: null,
    height: null,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
