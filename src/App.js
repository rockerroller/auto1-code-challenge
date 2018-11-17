import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from 'routes';
import Header from './components/Header';
import Footer from './components/Footer';
import actions from 'actions';
import './App.scss';

const mapStateToProps = ({ app, store }) => ({
  isLoading: app.isLoading,
  store
});

const mapDispatchToProps = (dispatch) => ({
  fetchDefaults: () => {
    dispatch(actions.store.fetchColors());
    dispatch(actions.store.fetchManufacturers());
  }
});

class App extends Component {

  componentWillMount() {
    const { store, fetchDefaults } = this.props;
    const { colors, manufacturers } = store;

    if (!colors || colors.length === 0 || !manufacturers || manufacturers.length === 0) {
      fetchDefaults();
    }
  }

  render() {
    const { isLoading } = this.props;

    return (
      <Router history={ createBrowserHistory() }>
        <div className="app">
          { isLoading ? <div>Loading</div> : null }
          <Header />
          <main>
            <Switch>
              {
                routes.map((route, i) => (
                  <Route key={ i } exact={ route.exact } path={ route.path } component={ route.component } />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
