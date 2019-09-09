import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import moment from 'moment'

class Tech extends React.Component {
  
  render() {
    const Begin＿Ruby＿At = moment('2018-06-01')
    const Begin＿Python＿At = moment('2018-12-01')
    const Begin＿Go＿At = moment('2019-02-20')
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
              <div class="date">使用歴 : {Today.diff(Begin＿Ruby＿At, "month")}ヶ月</div>
            </div>
            <div class="content">
              <div class="title">Python</div>
              <div class="description">
                主に機械学習（自然言語処理）で使います。
                コードを書く事自体はそれなりにできると思います。
              </div>
              <div class="date">使用歴 : {Today.diff(Begin＿Python＿At, "month")}ヶ月</div>
            </div>
            <div class="content">
              <div class="title">Golang</div>
              <div class="description">
                最近勉強を始めた言語です。
                とりあえず、チャットアプリを作ってみたりしている最中です。
              </div>
              <div class="date">使用歴 : {Today.diff(Begin＿Go＿At, "month")}ヶ月</div>
            </div>
          </div>
          <div class="each-column">
            <div class="content">
              <div class="title">React</div>
              <div class="description">
                このポートフォリオを作る時に初めて手をつけました。
                今後は、WEBサービスを個人開発する際などに使用していこうと思います。
              </div>
              <div class="date">使用歴 : 1ヶ月</div>
            </div>
            <div class="content">
              <div class="title">HTML・CSS</div>
              <div class="description">
                RailsやGoでサービスを作る時に使用します。
                WEBサービスを作る上で必要な最低限のスキルレベルです。
              </div>
              <div class="date">使用歴 : {Today.diff(Begin＿Ruby＿At, "month")}ヶ月</div>
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
