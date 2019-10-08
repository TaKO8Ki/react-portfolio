import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

class Works extends React.Component {
  render() {
    return (
      <div class="works">
        <h2>Works</h2>
        <div class="all-works">
          <div class="each-column">
            <div class="content">
              <div class="img">
                <img src={`${process.env.PUBLIC_URL}/puppeteer_thumbnail.png`} alt="Logo" />
              </div>
              <div class='tags'>
                <p>個人開発</p>
                <p>Node</p>
              </div>
              <div class="description">
                任意のHTMLを画像に変換することができるAPIです。
                OGP画像用のAPIサーバーなどに使用することを想定して開発しました。
                ちなみにこの上の画像もHTMLから作ったものです。
                <div class="link">
                  <a href="https://github.com/TaKO8Ki-hobby/puppeteer-thumbnail" target="_blank">リポジトリ</a>
                </div>
              </div>
            </div>
            <div class="content">
              <div class="img">
                <img src={`${process.env.PUBLIC_URL}/negomo.png`} alt="Logo" />
              </div>
              <div class='tags'>
                <p>個人開発</p>
                <p>Ruby</p>
              </div>
              <div class="description">
                「Twitter就活の促進」をコンセプトにしたサービスです。
                サービスについて詳しく説明した記事を書いたので、ぜひご覧ください。
                Dockerを導入して運用しています。
                <div class="link">
                  <a href="https://negomo.me/" target="_blank">Negomo</a>
                  <a href="https://qiita.com/TaKO8Ki/items/f7812f3164e00199bda6" target="_blank">紹介記事</a>
                </div>
              </div>
            </div>
            <div class="content">
              <div class="img">
                <img src={`${process.env.PUBLIC_URL}/golang_task_app_1000px.gif`} alt="Logo" />
              </div>
              <div class='tags'>
                <p>個人開発</p>
                <p>Golang</p>
              </div>
              <div class="description">
                GolangとWebSocketで作ったリアルタイムタスク管理アプリです。
                Golangを勉強し始めて1、2ヶ月ほど経った段階で作りました。
                リポジトリのREADMEにより詳しい説明があります。
                <div class="link">
                  <a href="https://github.com/TaKO8Ki/golang-websocket-task-app" target="_blank">リポジトリ</a>
                </div>
              </div>
            </div>
          </div>
          <div class="each-column">
            <div class="content">
              <div class="img">
                <img src={`${process.env.PUBLIC_URL}/linch.png`} alt="Logo" />
              </div>
              <div class='tags'>
                <p>個人開発</p>
                <p>Ruby</p>
              </div>
              <div class="description">
                「助け合って検索する」をテーマにしたサービスLinch（リンク）です。
                こちらも、Qiitaでサービスの紹介記事を書いたので、そちらをみていただくと分かりやすいと思います。
                <div class="link">
                  <a href="https://linch.link/" target="_blank">Linch</a>
                  <a href="https://qiita.com/TaKO8Ki/items/fd6c39d67d8b32c3d47c" target="_blank">紹介記事</a>
                </div>
              </div>
            </div>
            <div class="content">
              <div class="img">
                <img src={`${process.env.PUBLIC_URL}/orepen.png`} alt="Logo" />
              </div>
              <div class='tags'>
                <p>個人開発</p>
                <p>Ruby</p>
              </div>
              <div class="description">
                WEBサービスをオープンソースでプレスリリースできるサービスです。
                リリースまでは至っておらず、ソースコードを公開しています。
                <div class="link">
                  <a href="https://github.com/TaKO8Ki/orepen" target="_blank">リポジトリ</a>
                </div>
              </div>
            </div>
            <div class="content">
              <div class="title">ポートフォリオ</div>
              <div class='tags'>
                <p>個人開発</p>
                <p>React</p>
              </div>
              <div class="description">
                フロントエンドはほとんど手をつけていなかったので、
                このポートフォリオを作るために少し勉強しました。
                <div class="link">
                  <a href="https://tako8ki-portfolio.herokuapp.com/" target="_blank">ポートフォリオ</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Works;

