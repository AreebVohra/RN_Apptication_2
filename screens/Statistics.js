import React, { Component } from 'react';
import { StyleSheet, Text, View, button } from 'react-native';

class StatisticsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>this is Statistics</Text>
    </View>
    );
  }
}

export default StatisticsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
