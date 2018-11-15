import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="content">
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
