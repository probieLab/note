import React, { Component } from 'react';
// import EventEimtter from 'react-redux';
import style from './toolsBarItem.css';
import PropTypes from 'prop-types';
export default class ToolsBarItem extends Component {
  constructor(props) {
    super(props);
  }
  static contextTypes = {
    showList: PropTypes.func
  }
  showList = e => {
    // console.log(this.context);
    let { showList } = this.context;
    console.log(showList())
  }
  render() {
    return (
      <div className={style.tools} >
        <div onClick={this.showList} className={style.toolsBarBox}>
          {'->'}
        </div>
      </div>
    )
  }
} 