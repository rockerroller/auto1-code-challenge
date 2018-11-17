import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Button from 'components/Button';
import Container from 'components/Container';
import LabelledSelect from 'components/LabelledSelect';
import actions from 'actions';
import './styles.scss';

const mapStateToProps = ({ main, store }) => ({
  store
});

const mapDispatchToProps = (dispatch) => ({
  setFilterColor: (color) => dispatch(actions.main.setFilterColor(color)),
  setFilterManufacturer: (manufacturer) => dispatch(actions.main.setFilterManufacturer(manufacturer)),
  fetchCars: () => dispatch(actions.main.fetchCars())
});

class Filter extends Component {

  prepareFilters() {
    const { store } = this.props;
    const handleColors = () => store.colors.map((name) => ({ label: name, value:name }));
    const handleManufacturers = () => store.manufacturers.map(({ name }) => ({ label: name, value: name }));

    return [
      {
        label: 'Color',
        emptyLabel: 'All car colors',
        items: handleColors(),
        onSelectionChanged: this.onColorSelectionChanged
      }, {
        label: 'Manufacturer',
        emptyLabel: 'All manufacturers',
        items: handleManufacturers(),
        onSelectionChanged: this.onManufacturerSelectionChanged
      }
    ]
  }

  onFilter = () => this.props.fetchCars();

  onColorSelectionChanged = (color) => this.props.setFilterColor(color);

  onManufacturerSelectionChanged = (manufacturer) =>  this.props.setFilterManufacturer(manufacturer);

  filters = () => this.prepareFilters().map((filter, i) => {

    const { label, emptyLabel, items, onSelectionChanged, value } = filter;

    return (
      <LabelledSelect
        key={ i }
        emptyLabel={ emptyLabel  }
        label={ label }
        items={ items }
        onSelectionChanged={ onSelectionChanged }
        value={ value }/>
    )
  });

  render() {
    const { className } = this.props;

    return (
      <Container className={ classNames(className, 'cars-characteristics-filter') }>
        <this.filters />
        <Button className="button" label="Filter" onClick={ this.onFilter } />
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
