import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'components/Button';
import Container from 'components/Container';
import ListItem from '../ListItem';
import './styles.scss';

class List extends Component {


  render() {
    const { className } = this.props;
    const item = {
      "stockNumber":10811,
      "manufacturerName":"Tesla",
      "modelName":"Roadster",
      "color":"blue",
      "mileage":{
        "number":135993,
        "unit":"km"
      },
      "fuelType":"Diesel",
      "pictureUrl":"http://localhost:3001/car.svg"
    };

    return (
      <article className={ classNames(className, 'car-list') }>
        <ListItem item={ item }/>
      </article>
    );
  }
}

List.propTypes = {
};

export default List;
