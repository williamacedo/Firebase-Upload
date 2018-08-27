import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import firebase from 'firebase';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      lista:[]
    };

    var config = {
      apiKey: "AIzaSyCStywi2WBlq4U6PbfDQ01zkSDWWCZGLwg",
      authDomain: "projeto-teste-4354f.firebaseapp.com",
      databaseURL: "https://projeto-teste-4354f.firebaseio.com",
      projectId: "projeto-teste-4354f",
      storageBucket: "projeto-teste-4354f.appspot.com",
      messagingSenderId: "949847838320"
    };

    firebase.initializeApp(config);


    firebase.database().ref('precos').orderByValue().startAt(1000)
    .on('value',(snapshot) => {
      let state = this.state;
      state.lista = [];

      snapshot.forEach((childItem)=>{
        state.lista.push({
          key:childItem.key,
          valor:childItem.val()
        });
      });

      this.setState(state);
    });

  }

  render() {

    return (

      <View style={styles.container}>
        <FlatList data={this.state.lista} renderItem={({item})=>{
          return(
            <Text>-> {item.key+ ' - '+item.valor+}</Text>
          );
        }} />
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
