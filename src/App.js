import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <main className="app">
          <Main />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
