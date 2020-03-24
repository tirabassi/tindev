import React, { Component } from 'react';
import Routes from './routes';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
])

export default class App extends Component {
  render() {
    return (
      <Routes />
    );
  }
}