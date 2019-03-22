import React, { Component } from 'react'
import styles from './style.css'
import { BrowserRouter, Route, Link } from 'react-router-dom'


const App = () => (
  <BrowserRouter>
    <div>
    <div class="header">
      <div class="content">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/friends'>Friends</Link>
      </div>
    </div>
    <div class="body">
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/friends' component={Friends} />
    </div>
    </div>
  </BrowserRouter>
)

const Home = () => (
  <div class="home">
    <div class="img"><img src="https://i.gyazo.com/c022ae94fdfe4688247e7b2fdd5f283a.jpg"/></div>
    <div class="content">
      <h2>前田喬之</h2>
      <p>神戸大学工学部市民工学科</p>
      <div class="contact">
      </div>
    </div>
  </div>
)
const About = () => (
  <div>
    <h2>About</h2>
    <p>フレンズに投票するページです</p>
  </div>
)
const Friends = () => (
  <div>
    <h2>Friends</h2>
    <p>ここにフレンズのリストを書きます</p>
  </div>
)

export default App