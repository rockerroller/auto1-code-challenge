import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import routes from 'routes';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router history={ createBrowserHistory() }>
        <div className="app">
          <Header />
          <main>
            <Switch>
              {
                routes.map((route, i) => (
                  <Route exact={ route.exact } path={ route.path } component={ route.component } key={ i } />
                ))
              }
            </Switch>
          </main>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
