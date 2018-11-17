import React, { Component } from 'react';
import { connect } from 'react-redux';
import LabelledSelect from 'components/LabelledSelect';
import actions from 'actions';
import './styles.scss';

const mapStateToProps = ({ main }) => ({
  cars: main.cars,
  page: main.page,
  totalPageCount: main.totalPageCount
});

const mapDispatchToProps = (dispatch) => ({
  setPage: (page) => dispatch(actions.main.setPage(page)),
  fetchCars: () => dispatch(actions.main.fetchCars()),
});

class ListPaginate extends Component {

  onPageChanged = (page) => {
    this.props.setPage(page);
    this.props.fetchCars();
  }

  render() {
    const { cars, sort, totalPageCount } = this.props;

    return (
      <div className="car-list-paginate">
        <a>First</a>
        <a>Previous</a>
        <span>Page 2 of 10</span>
        <a>Next</a>
        <a>Last</a>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPaginate);
