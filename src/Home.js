import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import firebase from './FirebaseConnection';
import Sistema from './Sistema';

export default class Home extends React.Component {

  static navigationOptions = {
    title:'Home',
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      nome:this.props.navigation.state.params.nome
      //this.props.navigation.state.params.nome
    };

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Ola, {this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  }
});
