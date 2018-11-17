import React, { Component } from 'react';
import { connect } from 'react-redux';
import LabelledSelect from 'components/LabelledSelect';
import Filter from './components/Filter';
import List from './components/List';
import { get } from 'utils/request';
import actions from 'actions';
import './styles.scss';

const mapStateToProps = ({ main }) => ({
  store: main.store,
  filter: main.filter
});

const mapDispatchToProps = (dispatch) => ({
  loading: () => dispatch(actions.app.loading()),
  ready: () => dispatch(actions.app.ready()),
  setFilterColor: (color) => dispatch(actions.main.setFilterColor(color)),
  setFilterManufacturer: (manufacturer) => dispatch(actions.main.setFilterManufacturer(manufacturer)),
  storeData: (colors, manufacturers) => {
    dispatch(actions.main.storeColors(colors));
    dispatch(actions.main.storeManufacturers(manufacturers));
  }
});

class Main extends Component {

  prepareFilters() {
    const { filter, store } = this.props;
    const handleColors = () => store.colors.map((name) => ({ label: name, value:name }));
    const handleManufa = () => store.manufacturers.map(({ name }) => ({ label: name, value: name }));

    return {
      color: {
        label: 'Color',
        value: filter.color,
        emptyLabel: 'All car colors',
        items: handleColors(),
        onSelectionChanged: this.onColorSelectionChanged
      },
      manufacturer: {
        label: 'Manufacturer',
        value: filter.manufacturer,
        emptyLabel: 'All manufacturers',
        items: handleManufa(),
        onSelectionChanged: this.onManufacturerSelectionChanged
      }
    }
  }

  onFilter = () => {
    alert('clicked');
  }

  onColorSelectionChanged = (color) => {
    this.props.setFilterColor(color);
  }

  onManufacturerSelectionChanged = (manufacturer) => {
    this.props.setFilterManufacturer(manufacturer);
  }

  onOrderSelectionChanged = (order) => {
    // TODO: implement
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
  }

  render() {
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
          <div className="header">
            <article className="title">
              <div>Available cars</div>
              <div>Showing results x of x</div>
            </article>
            <LabelledSelect
              className="order"
              emptyLabel="None"
              label="Sort by"
              items={ sortByItems }
              onSelectionChanged={ this.onOrderSelectionChanged }/>
          </div>
          <List className="list"/>
        </div>
      </main>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
