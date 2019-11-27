import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

class About extends React.Component {
  render() {
    return (
      <div class="about">
        <h2>About</h2>
        <div class="all-content">
          <div class="img"><img src={`${process.env.PUBLIC_URL}/about.png`}/></div>
          <div class="content">
            <div class="name">前田喬之</div>
            <div class="name">Takayuki Maeda</div>
            <p>神戸大学工学部市民工学科</p>
            <p class="interest">興味：WEBサービス開発（主にサーバーサイド）</p>
            <div class="contact">
              <div class="each-column">
                <a href="https://twitter.com/takoyaki3160" target="_blank" class="twitter"><img src={`${process.env.PUBLIC_URL}/twitter.png`} alt="Logo" /></a>
                <a href="https://www.facebook.com/tako8ki" target="_blank"><img src={`${process.env.PUBLIC_URL}/facebook.png`} alt="Logo" /></a>
                <a href="https://www.linkedin.com/in/takayuki-maeda/" target="_blank"><img src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="Logo" /></a>
                <a href="https://github.com/TaKO8Ki" target="_blank"><img src={`${process.env.PUBLIC_URL}/github.png`} alt="Logo" /></a>
                <a href="https://tako8ki.hatenablog.com/" target="_blank"><img src={`${process.env.PUBLIC_URL}/hatena.svg`} alt="Logo" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default About;
