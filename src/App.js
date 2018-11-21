import React, { Component, Suspense } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'reducer';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import routes from 'routes';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.scss';

const persistConfig = {
  key: 'auto1:code-challenge',
  storage: storage,
  whitelist: ['store']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));
const persistor = persistStore(store)

class App extends Component {

  routes = () => routes.map((route, i) => (
    <Route key={ i } exact={ route.exact } path={ route.path } component={ route.component } />
  ));

  render() {
    return (
      <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
          <Router history={ createBrowserHistory() }>
            <div className="app">
              <Header />
              <main>
                <Suspense fallback={<div>Loading an awesome code-challenge! Please wait.</div>}>
                  <Switch>
                    { this.routes() }
                  </Switch>
                </Suspense>
              </main>
              <Footer/>
            </div>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
