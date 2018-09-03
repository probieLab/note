import React , { Component } from 'react';
import styles from './editorStyle/editorBasicStyle.css';
export default class EditorArea extends Component {
    constructor(props){
        super(props);
        this.state = {
            width:0,
            height:0,
            content:'',
            childContent:''
        }
    }
    componentDidMount(){
        console.log(this.refs["editorBox"].innerHTML)
    }
    enterDownListener=(e)=>{
        let target = e.target;
        let content = target.firstChild.nodeValue;
        if(e.keyCode == 13){
            // target.remove(target.children[1]);
            target.innerHTML =content+"<br>"
            console.log(target.childNodes[1])
        }
        
    }
    enterUpListener=(e)=>{
        let target = e.target;
        let content = target.firstChild.nodeValue;
        if(e.keyCode == 13){
            target.removeChild(target.children[0]);
            // target.innerHTML+="<br>"
            target.innerHTML +=content+"<br><br>"
            // console.log(target.childNodes[1])
        }
    }
    render(){
        let state = this.state;
        return(
            <div ref="editorBox" className={styles.container}>
                <pre className={styles.editorArea} contentEditable={true}
                    onKeyDown={(event)=>this.enterDownListener(event)}
                    onKeyUp={(event)=>this.enterUpListener(event)}
                >fds
                sdsd </pre> 
            </div>
        )
    }
}