import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import firebase from './src/FirebaseConnection';
var ImagePicker = require('react-native-image-picker');

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foto:null
    };

    this.pegarFoto = this.pegarFoto.bind(this);
  }

  pegarFoto() {
    ImagePicker.launchImageLibrary(null, (response)  => {
      if(response.uri){
        let foto = {uri:response.uri};
        let state = this.state;
        state.foto = foto;
        this.setState(state);
      }
    });
  }

  render() {
    return(
      <View style={styles.container}>
        <Button title="Pegar foto" onPress={this.pegarFoto} />
        <Image source={this.state.foto} />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 20
  }
});
