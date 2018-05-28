import React, { Component } from 'react';
import './passageListStyles/passageListItem.css';

export default class PassageListItem extends Component {
    constructor(props) {
        this.state = {
            action: 0
        }
    }
    action = (e) => {
        this.setState({
            action:1
        });
    }
    delete = (e) => {
        
    }
    render() {
        return (
            <div key={this.props.itemKey} className={"itemContainer" + (this.state.action == 1)?'itemAction':''}>
                <h4>Passage Title</h4>
                <p></p>
                <div className="tools">
                    <span>time</span>
                    <span onClick={(event)=>this.delete} >delete</span>
                </div>
            </div>
        )
    }
} 