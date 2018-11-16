import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'reducer';
import routes from 'routes';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.scss';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
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
      </Provider>
    );
  }
}

export default App;
