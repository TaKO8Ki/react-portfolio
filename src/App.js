import React, { Component } from 'react'
import styles from './style.css'
import moment from 'moment'
import { BrowserRouter, Route, Link } from 'react-router-dom'


const App = () => (
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

const Home = () => (
  <div class="home">
    <div class="title">Takayuki Maeda's portfolio</div>
    <div class="buttons">
    <Link to='/works'><div class="name">Works</div></Link>
    <Link to='/career'><div class="name">Career</div></Link>
    <Link to='/tech'><div class="name">Tech</div></Link>
    </div>
  </div>
)
const About = () => (
  <div class="about">
    <h2>About</h2>
    <div class="all-content">
      <div class="img"><img src="https://i.gyazo.com/c022ae94fdfe4688247e7b2fdd5f283a.jpg"/></div>
      <div class="content">
        <div class="name">前田喬之</div>
        <div class="name">Takayuki Maeda</div>
        <p>神戸大学工学部市民工学科</p>
        <p class="interest">興味：WEBサービス開発（主にサーバーサイド）・自然言語処理</p>
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
const Works = () => (
  <div class="works">
    <h2>Works</h2>
    <div class="all-works">
      <div class="each-column">
        <div class="content">
          <div class="img">
            <img src={`${process.env.PUBLIC_URL}/negomo.png`} alt="Logo" />
          </div>
          <div class="description">
            「Twitter就活の促進」をコンセプトにしたサービスです。
            現在開発中ですが、ほとんど実装し終わっているので、サービス自体は公開しています。
            <div class="link">
              <a href="https://negomo.me/" target="_blank">Negomo</a>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="img">
            <img src={`${process.env.PUBLIC_URL}/linch.png`} alt="Logo" />
          </div>
          <div class="description">
            「助け合って検索する」をテーマにしたサービスLinch（リンク）です。
            Qiitaでサービスの紹介記事を書いたので、そちらをみていただくと分かりやすいと思います。
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
          <div class="description">
            WEBサービスをオープンソースでプレスリリースできるサービスです。
            リリースまでは至っておらず、ソースコードを公開しています。
            <div class="link">
              <a href="https://github.com/TaKO8Ki/orepen" target="_blank">ソースコード</a>
            </div>
          </div>
        </div>
      </div>
      <div class="each-column">
        <div class="content">
            <div class="title">ポートフォリオ</div>
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

const Career = () => (
  <div class="career">
    <h2>Career</h2>
    <div class="all-careers">
    <div class="title">神戸大学工学部市民工学科（2021年卒業予定）</div>
      <div class="description">
        市民工学科という学科で、土木工学について勉強しています。
      </div>
      <div class="title">株式会社activo（2018年6月から現在まで）</div>
      <div class="description">
        サーバーサイドエンジニアとして自社サービス「activo」の開発を行う長期インターンをしています。
        <div class="link">
          <a href="https://activo.jp/" target="_blank">https://activo.jp/</a>
        </div>
      </div>
      <div class="title">株式会社サイバーエージェント（2019年3月1日）</div>
      <div class="description">
        学生版ヒダッカソン - API編というハッカソン形式の1日インターンに参加しました。
        このインターンの内容は、用意されたサーバー上にAPIを実装するというものです。
        いつもなら軽く済ませてしまう環境構築に時間を割いたり、使ったことのなかったSinatraで実装してみたりなど、技術的に非常に濃い時間を過ごすことができました。
      </div>
    </div>
  </div>
)

const Begin＿Ruby＿At = moment('2018-06-01')
const Begin＿Python＿At = moment('2018-12-01')
const Begin＿Go＿At = moment('2019-02-20')
const Today = moment()

const Tech = () => (
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
          <div class="title">English</div>
          <div class="description">
            英語のdocumentが支障無く読める程度の英語力です。
            また、日常会話であれば、問題なく話せます。
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default App