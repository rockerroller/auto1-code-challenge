import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import ListItem from '../ListItem';
import actions from 'actions';
import './styles.scss';

const mapStateToProps = ({ main }) => ({
  isLoading: main.isFetching,
  cars: main.cars
});

const mapDispatchToProps = (dispatch) => ({
  setCar: (car) => dispatch(actions.detail.setCar(car)),
});

class List extends Component {

  onViewDetailsClick = (item) => {
    this.props.setCar(item);
  }

  cars = () => {
    const { cars, isLoading } = this.props;
    if (isLoading) {
      return [0, 1, 2].map((i) => (
        <ListItem key={ i } isLoading={ true }/>
      ));
    }
    return cars.map((car, i) => (
      <ListItem key={ i } item={ car } onViewDetailsClick={ this.onViewDetailsClick }/>
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

export default connect(mapStateToProps, mapDispatchToProps)(List);
