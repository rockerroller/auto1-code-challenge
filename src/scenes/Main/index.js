import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filter from './components/Filter';
import List from './components/List';
import ListHeader from './components/ListHeader';
import ListPaginate from './components/ListPaginate';
import actions from 'actions';
import './styles.scss';

const mapDispatchToProps = (dispatch) => ({
  fetchDefaults: () => {
    dispatch(actions.store.fetchColors());
    dispatch(actions.store.fetchManufacturers());
  },
  fetchCars: () => dispatch(actions.main.fetchCars()),
});

class Main extends Component {

  componentWillMount() {
    this.props.fetchDefaults();
    this.props.fetchCars();
  }

  render() {

    return (
      <main className="main-scene">
        <nav className="sidebar">
          <Filter />
        </nav>
        <div className="content">
          <ListHeader />
          <List className="list" />
          <ListPaginate />
        </div>
      </main>
    );
  }
}

export default connect(null, mapDispatchToProps)(Main);
