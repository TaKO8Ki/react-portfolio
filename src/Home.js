import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div class="home">
        <div class="title">Takayuki Maeda's portfolio</div>
        <div class="buttons">
        <Link to='/works'><div class="name">Works</div></Link>
        <Link to='/career'><div class="name">Career</div></Link>
        <Link to='/tech'><div class="name">Tech</div></Link>
        </div>
      </div>  
    )
  }
}

export default Home;