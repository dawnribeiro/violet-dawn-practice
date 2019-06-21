import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './pages/Header'
import NavBar from './pages/NavBar'
import HomePage from './pages/HomePage'
import Roses from './pages/Roses'
import Lilies from './pages/Lilies'
import Tulips from './pages/Tulips'
import Sunflowers from './pages/Sunflowers'
import Carnations from './pages/Carnations'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/roses" component={Roses} />
            <Route exact path="/lilies" component={Lilies} />
            <Route exact path="/tulips" component={Tulips} />
            <Route exact path="/sunflowers" component={Sunflowers} />
            <Route exact path="/carnations" component={Carnations} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
