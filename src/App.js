import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import routes from 'routes';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.scss';

class App extends Component {

  routes = () => routes.map((route, i) => (
    <Route key={ i } exact={ route.exact } path={ route.path } component={ route.component } />
  ));

  render() {
    return (
      <Router history={ createBrowserHistory() }>
        <div className="app">
          <Header />
          <main>
            <Switch>
              { this.routes() }
            </Switch>
          </main>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
