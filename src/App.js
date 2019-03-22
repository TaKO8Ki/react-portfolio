import React, { Component } from 'react'
import styles from './style.css'
import { BrowserRouter, Route, Link } from 'react-router-dom'


const App = () => (
  <BrowserRouter>
    <div>
    <div>
      <div><Link to='/'>Home</Link></div>
      <div><Link to='/about'>About</Link></div>
      <div><Link to='/friends'>Friends</Link></div>
    </div>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/friends' component={Friends} />
    </div>
  </BrowserRouter>
)

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>@TaKO8Kiのポートフォリオ</p>
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