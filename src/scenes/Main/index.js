import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Filter from './components/Filter';
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
    const { colors, manufacturers } = this.props.store;
    const handleColors = () => colors.map((name) => ({ label: name, value:name }));
    const handleManufa = () => manufacturers.map(({ name }) => ({ label: name, value: name }));

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
    return (
      <main className="main">
        <Filter className="filter" filters={ filters } onFilter={ this.onFilter }/>
      </main>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
