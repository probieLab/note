import React, { Component } from 'react';
import { style } from './passageListStyles/itemStyle'
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
            <div key={this.props.itemKey} style={style.itemAction}>
                <h4>Passage Title</h4>
                <p></p>
                <div className="tools">
                    <span>time</span>
                    <span onClick={(event)=>this.delete(event)} >delete</span>
                </div>
            </div>
        )
    }
} 