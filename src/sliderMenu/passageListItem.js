import React, { Component } from 'react';
import  style  from './passageListStyles/passageListItemStyle.css';
export default class PassageListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            action: 0
        }
        console.log(style);
    }
    action = (e) => {
        this.setState({
            action:1
        });
    }
    delete = (e) => {
        console.log(e.target);
    }
    render() {
        return (
            <div key={this.props.itemKey} className={style.itemBox} >
                <h4>Passage Title</h4>
                <p></p>
                <div className={style.tools} >
                    <span className={style.time} >发布时间：time</span>
                    <button className={style.deleteItem} onClick={(event)=>this.delete(event)} >+</button>
                </div>
            </div>
        )
    }
} 