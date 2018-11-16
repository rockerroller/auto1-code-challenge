import React, { Component } from 'react';
import classNames from 'classnames';
import Filter from './components/Filter';
import { get } from 'utils/request';
import './styles.scss';

class Main extends Component {

  state = {
    filters: {
      color: {
        label: 'Color',
        emptyLabel: 'All car colors',
      },
      manufacturer: {
        label: 'Manufacturer',
        emptyLabel: 'All manufacturers',
      }
    }
  }

  onFilter = () => {
    alert('clicked');
  }

  onColorSelectionChanged = (color) => {
    alert(color);
  }

  onManufacturerSelectionChanged = (manufacturer) => {
    alert(manufacturer);
  }

  onLoaded = ([colorsData, manufacturersData]) => {
    let { filters } = this.state;
    const handleColors = () => colorsData.colors.map((name) => ({ label: name, value:name  }));
    const handleManufacturers = () => manufacturersData.manufacturers.map(({ name }) => ({
      label: name,
      value: name
    }));

    filters.color.items = handleColors();
    filters.manufacturer.items = handleManufacturers();

    this.setState({ filters });
  }

  componentWillMount() {
    let { filters } = this.state;

    filters.color.onSelectionChanged = this.onColorSelectionChanged;
    filters.manufacturer.onSelectionChanged = this.onManufacturerSelectionChanged;

    // load the comboboxes
    Promise.all([get('colors'), get('manufacturers')]).then(this.onLoaded);;

    this.setState({ filters });
  }

  render() {
    let { filters } = this.state;

    return (
      <main className="main">
        <Filter className="filter" filters={ filters } onFilter={ this.onFilter }/>
      </main>
    );
  }
}

export default Main;
