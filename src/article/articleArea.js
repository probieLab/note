import React, { Component } from 'react';
import style from './articleArea.css';
export default class ArticleArea extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.articleTitle}>
          测试文档
        </div>
        <div className={style.labelBox}>
          <button className={style.articleLabel}>标签</button>
        </div>
        <div className={style.articleContentBox}>
          <p>
            测试文档内容
          </p>
        </div>
      </div>
    )
  }
}