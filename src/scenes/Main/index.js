import React, { Component } from 'react';
import classNames from 'classnames';
import Filter from './components/Filter';
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

  onColorSelectionChanged = (color) => {
    alert(color);
  }

  onManufacturerSelectionChanged = (manufacturer) => {
    alert(manufacturer);
  }

  componentWillMount() {
    let { filters } = this.state;
    filters.color.onSelectionChanged = this.onColorSelectionChanged;
    filters.manufacturer.onSelectionChanged = this.onColorSelectionChanged;
    this.setState({ filters });
  }

  render() {
    let { filters } = this.state;

    return (
      <main className="main">
        <Filter className="filter" filters={ filters } />
      </main>
    );
  }
}

export default Main;
