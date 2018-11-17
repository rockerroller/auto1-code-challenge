import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import ListItem from '../ListItem';
import './styles.scss';

const mapStateToProps = ({ main }) => ({
  isLoading: main.isFetching,
  cars: main.cars
});

class List extends Component {

  cars = () => {
    const { cars, isLoading } = this.props;
    if (isLoading) {
      return [0, 1, 2].map((i) => (
        <ListItem key={ i } isLoading={ true }/>
      ));
    }
    return cars.map((car, i) => (
      <ListItem key={ i } item={ car }/>
    ));
  }

  render() {
    const { className } = this.props;

    return (
      <div className={ classNames(className, 'car-list') }>
        <this.cars />
      </div>
    );
  }
}

List.defaultProps = {
  cars: []
};

export default connect(mapStateToProps)(List);
