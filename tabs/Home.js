import React, { Component } from 'react';
import { StyleSheet, Text, View, button } from 'react-native';

 class HomeScreen extends Component {
  render() {
    return (
      <View  style={styles.container}>
      <Text style={styles.welcome}>this is Home</Text>
    </View>
    );
  }
}

export default HomeScreen;

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
