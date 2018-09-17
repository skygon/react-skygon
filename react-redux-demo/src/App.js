import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import Header from './header';
import Main from './main';
import './App.css'

class App extends Component {
  static childContextTypes = {
    themeColor :PropTypes.string
  }
  constructor () {
    super()
    this.state = {
      themeColor : 'red'
    }
  }
  getChildContext () {
    return {
      themeColor : this.state.themeColor
    }
  }
  render () {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}

export default App;
