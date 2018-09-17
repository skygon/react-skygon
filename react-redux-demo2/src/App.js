import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import './index.css'

import createStore from './store'
import reducer from './ThemeReducer'

const store = createStore(reducer)

class App extends Component {
  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext () {
    return { store }
  }
  
  render () {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

export default App
