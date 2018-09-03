import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Article from './article/articleArea'
import PassageList from './sliderMenu/passageListContainer';
import EditorArea from './editorArea/editorArea';
console.log(Component);
class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: '100vh', width: '100vw',display:'flex',overflow:'hidden' }} >
        <PassageList />
        {/* <EditorArea/> */}
        <Article/>
      </div>
    );
  }
}

export default App;
