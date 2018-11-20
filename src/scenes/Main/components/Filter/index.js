import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Button from 'components/Button';
import Container from 'components/Container';
import LabelledSelect from 'components/LabelledSelect';
import actions from 'actions';
import { capitalize } from 'utils';
import './styles.scss';

const mapStateToProps = ({ main, store }) => ({
  filter: main.filter,
  colors: store.colors,
  manufacturers: store.manufacturers
});

const mapDispatchToProps = (dispatch) => ({
  setFilterColor: (color) => dispatch(actions.main.setFilterColor(color)),
  setFilterManufacturer: (manufacturer) => dispatch(actions.main.setFilterManufacturer(manufacturer)),
  fetchCars: () => dispatch(actions.main.fetchCars()),
  fetchColors: () => dispatch(actions.store.fetchColors()),
  fetchManufacturers: () => dispatch(actions.store.fetchManufacturers())
});

export class Filter extends Component {

  onFilter = () => this.props.fetchCars();

  onColorSelectionChanged = (color) => this.props.setFilterColor(color);

  onManufacturerSelectionChanged = (manufacturer) =>  this.props.setFilterManufacturer(manufacturer);

  filters = () => {

    const { colors, manufacturers, filter } = this.props;
    const colorItems = colors.map((name) => ({ label: capitalize(name), value: name }));
    const manufacturerItems = manufacturers.map(({ name }) => ({ label: capitalize(name), value: name }));

    colorItems.splice(0, 0, { label: 'All car colors', value: '' });
    manufacturerItems.splice(0, 0, { label: 'All manufacturers', value: '' });

    return (
      <Fragment>
        <LabelledSelect
          label="Color"
          items={ colorItems }
          onSelectionChanged={ this.onColorSelectionChanged }
          value={ filter.color }/>
        <LabelledSelect
          label="Manufacturer"
          items={ manufacturerItems }
          onSelectionChanged={ this.onManufacturerSelectionChanged }
          value={ filter.manufacturer }/>
      </Fragment>
    );
  };

  componentWillMount() {
    const { colors, fetchColors, manufacturers, fetchManufacturers } = this.props;
    if (!colors || colors.length === 0) {
      fetchColors();
    }
    if (!manufacturers || manufacturers.length === 0) {
      fetchManufacturers();
    }
  }

  render() {
    const { className } = this.props;

    return (
      <Container className={ classNames(className, 'cars-characteristics-filter') }>
        { this.filters() }
        <Button className="button" onClick={ this.onFilter }>
          Filter
        </Button>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
