import React, { Component } from 'react';
import ListItem from './passageListItem';
import styles from './passageListStyles/passageListItemStyle.css';
export default class passageListContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            testData:['','','','']
        }
        console.log(styles)
    }
    render() {
        return (
            <div className={styles.test} >
                {this.state.testData.map((data,i)=><ListItem key={i}/>)}
            </div>
        )
    }
}