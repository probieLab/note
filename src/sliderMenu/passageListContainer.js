import React, { Component } from 'react';
import ListItem from './passageListItem';
export default class passageListContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            testData:['','','','']
        }
    }
    render() {
        return (
            <div className="container">
                {this.state.testData.map((data,i)=><ListItem key={i}/>)}
            </div>
        )
    }
}