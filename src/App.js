import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PassageList from './sliderMenu/passageListContainer';
import EditorArea from './editorArea/editorArea';
class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: window.innerHeight + 'px', width: window.innerWidth + 'px' }} >
        <PassageList />
        <EditorArea/>
      </div>
    );
  }
}

export default App;
