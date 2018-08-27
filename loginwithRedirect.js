import React, { Component } from 'react';
import { createStackNavigator} from 'react-navigation';
import Login from './src/Login';
import Home from './src/Home';

const Navegador = createStackNavigator({
  Login:{
    screen:Login
  },
  Home:{
    screen:Home
  }
});

export default Navegador;
