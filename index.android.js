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

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(this)
    var results;
    var self = this;
    console.log(self);
    fetch('https://www.omdbapi.com/?tomatoes=true&t=' + this.state.value)
        .then(function(res) {
            return res.json();
        }).then(function(json) {
              console.log(json)
              self.setState({
                error: json.Error,
                poster: json.Poster,
                title:  json.Title,
                actors: 'Actors: ' + json.Actors,
                released: 'Released: '+ json.Released,
                metacritic: 'Metacritic Score: ' + json.Metascore,
                imdb: 'IMDB Rating: ' + json.imdbRating,
                rotten: 'Rotten Tomato Meter: ' + json.tomatoMeter + '%',
                plot: 'Plot: ' + json.Plot
              });

          });
    event.preventDefault();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Searcher!
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 1, width: 200}}
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={(event) => this.handleSubmit(event)}
          value={this.state.text}
        />
        <Text style={styles.welcome}>
          {this.state.text}
          {console.log(this.state.text)}
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
