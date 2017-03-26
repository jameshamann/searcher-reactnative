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
  View,
  Image,
  ScrollView
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
    fetch('https://www.omdbapi.com/?tomatoes=true&t=' + this.state.text)
        .then(function(res) {
            return res.json();
        }).then(function(json) {
              console.log(json)
              self.setState({
                error: json.Error + '\n' + '\n',
                poster: json.Poster,
                title:  json.Title + '\n' + '\n',
                actors: 'Actors: ' + json.Actors + '\n' + '\n',
                released: 'Released: '+ json.Released + '\n' + '\n',
                metacritic: 'Metacritic Score: ' + json.Metascore + '\n' + '\n',
                imdb: 'IMDB Rating: ' + json.imdbRating + '\n' + '\n',
                rotten: 'Rotten Tomato Meter: ' + json.tomatoMeter + '%' + '\n' + '\n',
                plot: 'Plot: ' + json.Plot
              });


          });
    event.preventDefault();
  }

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Searcher
        </Text>
          <View style={{padding: 5}}>
            <Image
              style={{height: 50, width: 50}}
              source={require('./img/icon.png')}
             />
         </View>
         <View style={styles.container}>
           <TextInput
             style={{height: 40, borderColor: 'grey', borderWidth: 1, width: 200, padding: 10}}
             underlineColorAndroid='transparent'
             onChangeText={(text) => this.setState({text})}
             onSubmitEditing={(event) => this.handleSubmit(event)}
             value={this.state.text}
           />
         </View>
        <View>
          <Image
            style={{width: 150, height: 222, padding: 5}}
            source={{uri: this.state.poster}}
          />
        </View>
        <Text style={styles.searchResults}>
            {this.state.title}
            {this.state.released}
            {this.state.metacritic}
            {this.state.imdb}
            {this.state.rotten}
            {this.state.plot}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
  heading: {
    fontFamily: 'sans-serif-thin',
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
  searchResults: {
    fontFamily: 'sans-serif-thin',
    textAlign: 'center',
    padding: 5,
    color: 'black',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('searcher', () => searcher);
