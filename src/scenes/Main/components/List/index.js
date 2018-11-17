import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'components/Button';
import Container from 'components/Container';
import ListItem from '../ListItem';
import './styles.scss';

class List extends Component {

  cars = () => this.props.cars.map((car, i) => (
    <ListItem key={ i } item={ car }/>
  ));

  render() {
    const { className } = this.props;

    return (
      <article className={ classNames(className, 'car-list') }>
        <this.cars />
      </article>
    );
  }
}

List.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.shape({
    stockNumber: PropTypes.number.isRequired,
    manufacturerName: PropTypes.string.isRequired,
    modelName: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    mileage: PropTypes.objectOf(PropTypes.shape({
      number: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired
    })).isRequired,
    fuelType: PropTypes.string.isRequired,
    pictureUrl: PropTypes.string.isRequired,
  })),
  isLoading: PropTypes.bool
};

List.defaultProps = {
  cars: [],
  isLoading: false,
};

export default List;
