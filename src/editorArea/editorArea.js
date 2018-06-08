import React , { Component } from 'react';
export default class EditorArea extends Component {
    render(){
        return(
            <div className="editorAreaContainer" style={{height:window.height+'px'}}>
                <div className="wordEditor" contentEditable="true"></div> 
            </div>
        )
    }
}