import React, { Component } from 'react';
import Proptypes from 'prop-types'
import ListItem from './passageListItem';
import ToolsBar from './toolsBar/toolsBarItem';
import style from './passageListStyles/listContainer.css';
let listStyles = [style.listContainer]
export default class passageListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testData: ['', '', '', ''],
            listStyles: listStyles,
            takeupFlag: 1,
            listTitle: '分析'
        }
    }
    static childContextTypes = {
        takeupFlag: Proptypes.number,
        showList: Proptypes.func,
    }
    takeUpList = () => {
        let self = this;
        let promise = new Promise((resolve, reject) => {
            self.setState({
                listStyles: style.listContainer + '   ' + style.takeup,
            });
            setTimeout(() => {
                resolve(1);
            }, 580);
        }).then(data => {
            if (data == 1) {
                this.setState({
                    listStyles: style.hidden + '   ' + style.takeup,
                    takeupFlag: 0
                })
            }
        })
        return promise;
    }
    showList = () => {
        let self = this;
        if (this.state.takeupFlag == 0) {
            let promise = new Promise((resolve, reject) => {
                self.setState({
                    listStyles: style.listContainer + '   ' + style.shwolist,
                });
                setTimeout(() => {
                    resolve(1)
                }, 580);
            }).then(data => {
                if (data == 1) {
                    this.setState({
                        listStyles: style.listContainer,
                        takeupFlag: 1
                    })
                }
            })
            return promise;
        }
    }
    render() {
        return (
            <div style={{ flex: 0, display: 'flex', alignItems: 'center', width: 'auto' }} >

                <ToolsBar />
                <div className={this.state.listStyles}>
                    <h2>{this.state.listTitle} </h2>
                    {this.state.testData.map((data, i) => <ListItem key={i} />)}
                    <div className={style.takeupBtnBox}>
                        <button className={style.takeupBtn} onClick={this.takeUpList}>
                            {'<'}
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    getChildContext() {
        return {
            takeupFlag: this.state.takeupFlag,
            showList: this.showList
        }
    }
}