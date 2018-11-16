import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from 'routes';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.scss';

const mapStateToProps = ({ app }) => ({ isLoading: app.isLoading });

class App extends Component {

  render() {
    const { isLoading } = this.props;

    return (
      <Router history={ createBrowserHistory() }>
        <div className="app">
          { isLoading ? <div style="background-color: red">Loading</div> : null }
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

export default connect(mapStateToProps)(App);
