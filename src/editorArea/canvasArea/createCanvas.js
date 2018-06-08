import React, { Component } from 'react';
export class CreateCanvas extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div className={styles.toolsBox} ></div>
                <canvas></canvas>
            </div>
        )
    }
}