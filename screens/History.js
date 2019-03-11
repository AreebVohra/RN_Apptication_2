import React, { Component } from 'react';
import { StyleSheet, Text, View, button } from 'react-native';

class HistoryScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>this is History</Text>
    </View>
    );
  }
}

export default HistoryScreen;

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
