import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Header from './pages/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router>
          <Switch>
            <Route />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
