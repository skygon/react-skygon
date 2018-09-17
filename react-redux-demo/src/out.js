import React, {Component} from 'react';
import PropTypes from 'prop-types'; 
import './App.css';

class Outter extends Component {
  static contextTypes = {
    themeColor: PropTypes.string
  }

  render () {
    return (
      <h1 style={{ color: this.context.themeColor }}>This is title</h1>
    )
  }
}

export default Outter
