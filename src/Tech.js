import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import moment from 'moment'

class Tech extends React.Component {
  
  render() {
    const BeginRubyAt = moment('2018-06-01')
    const BeginPythonAt = moment('2018-12-01')
    const BeginGoAt = moment('2019-02-20')
    const Today = moment()

    return (      
      <div class="tech">
        <h2>Tech</h2>
        <div class="all-works">
          <div class="each-column">
            <div class="content">
              <div class="title">Ruby・Rails</div>
              <div class="description">
                インターンや個人開発でメインとして使っています。
                業務では、Rspecを使ってテストを書くこともよくあります。
                実際に作ったサービスがあるので、そちらをみていただけると分かりやすいと思います。
              </div>
              <div class="date">使用歴 : {Today.diff(BeginRubyAt, "month")}ヶ月</div>
            </div>
            <div class="content">
              <div class="title">Python</div>
              <div class="description">
                主に機械学習（自然言語処理）で使います。
                コードを書く事自体はそれなりにできると思います。
              </div>
              <div class="date">使用歴 : {Today.diff(BeginPythonAt, "month")}ヶ月</div>
            </div>
            <div class="content">
              <div class="title">Golang</div>
              <div class="description">
                最近メインでやっている言語です。Treasureというインターンでも使用しました。
              </div>
              <div class="date">使用歴 : {Today.diff(BeginGoAt, "month")}ヶ月</div>
            </div>
          </div>
          <div class="each-column">
            <div class="content">
              <div class="title">React</div>
              <div class="description">
                個人開発する時などに使用しています。
                主に参加したインターンで触ることが多かったです。
              </div>
              <div class="date">使用歴 : 1ヶ月</div>
            </div>
            <div class="content">
              <div class="title">HTML・CSS</div>
              <div class="description">
                RailsやGoでサービスを作る時に使用します。
                WEBサービスを作る上で必要な最低限のスキルレベルです。
              </div>
              <div class="date">使用歴 : {Today.diff(BeginRubyAt, "month")}ヶ月</div>
            </div>
            <div class="content">
              <div class="title">Docker</div>
              <div class="description">
                インターン先や個人開発したNegomoというサービスで利用しています。
              </div>
            </div>
          </div>
          <div class="each-column">
            <div class="content">
              <div class="title">English</div>
              <div class="description">
                英語のdocumentが支障無く読める程度の英語力です。
                また、日常会話であれば、問題なく話せます。
              </div>
            </div>
            <div class="lack">
            </div>
            <div class="lack">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Tech;
