import React, { Component } from 'react';
import { connect } from 'react-redux';
import LabelledSelect from 'components/LabelledSelect';
import Filter from './components/Filter';
import List from './components/List';
import ListHeader from './components/ListHeader';
import { get } from 'utils/request';
import actions from 'actions';
import './styles.scss';

const mapStateToProps = ({ main, store }) => ({
  store,
  sort: main.sort
});

const mapDispatchToProps = (dispatch) => ({
  loading: () => dispatch(actions.app.loading()),
  ready: () => dispatch(actions.app.ready()),
  setFilterColor: (color) => dispatch(actions.main.setFilterColor(color)),
  setFilterManufacturer: (manufacturer) => dispatch(actions.main.setFilterManufacturer(manufacturer)),
  setSortOrderByMileage: (sort) => dispatch(actions.main.setSortOrderByMileage(sort)),
  setPage: (page) => dispatch(actions.main.setPage(page)),
  fetchCars: () => dispatch(actions.main.fetchCars()),
  storeData: (colors, manufacturers) => {
    dispatch(actions.store.storeColors(colors));
    dispatch(actions.store.storeManufacturers(manufacturers));
  }
});

class Main extends Component {

  onLoaded = ([{ colors }, { manufacturers }]) => {
    const { ready, storeData } = this.props;
    storeData(colors, manufacturers);
    ready();
  }

  componentWillMount() {
    const { loading, store } = this.props;
    const { colors, manufacturers } = store;

    if (!colors || colors.length === 0 || !manufacturers || manufacturers.length === 0) {
      // load the comboboxes
      Promise.all([get('colors'), get('manufacturers')]).then(this.onLoaded);
      loading();
    }

    this.props.fetchCars();
  }

  render() {

    return (
      <main className="main">
        <nav className="sidebar">
          <Filter />
        </nav>
        <div className="content">
          <ListHeader />
          <List className="list" />
        </div>
      </main>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
