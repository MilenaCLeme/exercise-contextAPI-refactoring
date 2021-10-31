// src/App.js
import React, { Component } from 'react';
import Provider from './context/Provider';
import Selector from './components/Selector';
import Botao from './components/Botao';
import Posts from './components/Posts';

class App extends Component {
  render() {
    return (
      <Provider>
        <Selector />
        <Botao />
        <Posts />
      </Provider>
    );
  }
}

export default App;
