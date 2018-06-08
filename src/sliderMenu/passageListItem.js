import React, { Component } from 'react';
export default class PassageListItem extends Component {
    constructor(props) {
        super(props)
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
        console.log(e.target);
    }
    render() {
        return (
            <div key={this.props.itemKey} className={(this.state.action === 1)?'itemAction':''}>
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