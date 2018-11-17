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

  cars = () => this.props.cars.map((car, i) => (
    <ListItem key={ i } item={ car } isLoading={ this.props.isLoading }/>
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

List.defaultProps = {
  cars: [],
  isLoading: false,
};

export default connect(mapStateToProps)(List);
