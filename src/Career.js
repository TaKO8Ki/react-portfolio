import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

class Career extends React.Component {
  render() {
    return (
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
          <div class="title">株式会社サイバーエージェント（2019年4月30日）</div>
          <div class="description">
          平成最後の日、4/30に行われた「平成最後のハッカソン」に参加しました。
          即席の学生チームで開発を行ったので、上手くいかなかった点もありましたが、
          チーム開発でのタスクの割り振りや環境構築などの大変さに気づくとてもいい機会になりました。
          </div>
        </div>
      </div>
    )
  }
}

export default Career;