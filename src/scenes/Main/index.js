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

  prepareFilters() {
    const { store } = this.props;
    const handleColors = () => store.colors.map((name) => ({ label: name, value:name }));
    const handleManufacturers = () => store.manufacturers.map(({ name }) => ({ label: name, value: name }));

    return {
      color: {
        label: 'Color',
        emptyLabel: 'All car colors',
        items: handleColors(),
        onSelectionChanged: this.onColorSelectionChanged
      },
      manufacturer: {
        label: 'Manufacturer',
        emptyLabel: 'All manufacturers',
        items: handleManufacturers(),
        onSelectionChanged: this.onManufacturerSelectionChanged
      }
    }
  }

  onFilter = () => this.props.fetchCars();

  onColorSelectionChanged = (color) => this.props.setFilterColor(color);

  onManufacturerSelectionChanged = (manufacturer) =>  this.props.setFilterManufacturer(manufacturer);

  onOrderSelectionChanged = (order) => {
    this.props.setSortOrderByMileage(order);
    this.props.fetchCars();
  }

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
    const { sort } = this.props;
    const filters = this.prepareFilters();
    const sortByItems = [{
      label: 'Mileage - Ascending',
      value: 'asc'
    }, {
      label: 'Mileage - Descending',
      value: 'des'
    }];

    return (
      <main className="main">
        <nav className="sidebar">
          <Filter filters={ filters } onFilter={ this.onFilter }/>
        </nav>
        <div className="content">
          <ListHeader />
          <List className="list"/>
        </div>
      </main>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
