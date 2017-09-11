import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { Provider, connect } from 'react-redux';
import firebase from 'firebase';

import store from './Store';
import createRouter from './Router';
import { setLogin as setLoginAction } from './Actions';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCp43U3Iggai1oHPHWi6LhMDZ-IEqg1m3k",
      authDomain: "rn-manager-6fd64.firebaseapp.com",
      databaseURL: "https://rn-manager-6fd64.firebaseio.com",
      projectId: "rn-manager-6fd64",
      storageBucket: "",
      messagingSenderId: "828776087179"
    };
    firebase.initializeApp(config);
  }

  render() {
    const Layout = createRouter(store.getState().isLogged);
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}

export default App;
