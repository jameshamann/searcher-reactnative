/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View
} from 'react-native';

export default class searcher extends Component {

  constructor(props) {
   super(props);
   this.state = { text: '' };
 }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Searcher!
        </Text>
        <TextInput
          style={{height: 30, borderColor: 'grey', borderWidth: 1, width: 200}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={styles.welcome}>
          {this.state.text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('searcher', () => searcher);
