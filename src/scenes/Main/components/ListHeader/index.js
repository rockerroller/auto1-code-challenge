import React, { Component } from 'react';
import { connect } from 'react-redux';
import LabelledSelect from 'components/LabelledSelect';
import actions from 'actions';
import './styles.scss';

const mapStateToProps = ({ main }) => ({
  cars: main.cars,
  page: main.page,
  sort: main.sort,
  totalPageCount: main.totalPageCount
});

const mapDispatchToProps = (dispatch) => ({
  setSortOrderByMileage: (sort) => dispatch(actions.main.setSortOrderByMileage(sort)),
  fetchCars: () => dispatch(actions.main.fetchCars()),
});

class ListHeader extends Component {

  sortByItems = [{
    label: 'Mileage - Ascending',
    value: 'asc'
  }, {
    label: 'Mileage - Descending',
    value: 'des'
  }];

  onOrderSelectionChanged = (order) => {
    this.props.setSortOrderByMileage(order);
    this.props.fetchCars();
  }

  calcCurrQtt = () => {
    const { cars, totalPageCount } = this.props;
    const total = totalPageCount * cars.length;
    let qtt = cars.length;
    if (qtt > total) {
      qtt = total;
    }
    return qtt;
  }

  render() {
    const { cars, sort, totalPageCount } = this.props;
    const currentQuantity = this.calcCurrQtt();

    return (
      <div className="header">
        <article className="title">
          <div>Available cars</div>
          <div>Showing { currentQuantity } of { totalPageCount * cars.length } results</div>
        </article>
        <LabelledSelect
          className="order"
          emptyLabel="None"
          label="Sort by"
          items={ this.sortByItems }
          onSelectionChanged={ this.onOrderSelectionChanged }
          value={ sort } />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListHeader);
