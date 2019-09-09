import React, { Component } from 'react'
import styles from './stylesheet/style.css'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Works from './Works'
import Career from './Career'
import Tech from './Tech'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <div class="header">
          <div class="content">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/works'>Works</Link>
            <Link to='/career'>Career</Link>
            <Link to='/tech'>Tech</Link>
          </div>
        </div>
        <div class="body">
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/works' component={Works} />
          <Route path='/career' component={Career} />
          <Route path='/tech' component={Tech} />
        </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App