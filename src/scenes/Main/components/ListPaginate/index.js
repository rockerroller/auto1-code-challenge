import React, { Component } from 'react';
import { connect } from 'react-redux';
import Anchor from 'components/Anchor';
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

  changePage = (page) => {
    this.props.setPage(page);
    this.props.fetchCars();
  }

  onFirstClicked = () => {
    if (this.props.page > 1) {
      this.changePage(1);
    }
  }

  onPreviousClicked = () => {
    let page = this.props.page;
    page--;
    if (page > 0) {
      this.changePage(page);
    }
  }

  onNextClicked = () => {
    let page = this.props.page;
    page++;
    if (page <= this.props.totalPageCount) {
      this.changePage(page);
    }
  }

  onLastClicked = () => {
    if (this.props.page < this.props.totalPageCount) {
      this.changePage(this.props.totalPageCount);
    }
  }

  render() {
    const { cars, page, totalPageCount } = this.props;

    return (
      <div className="car-list-paginate">
        <Anchor onClick={ this.onFirstClicked }>First</Anchor>
        <Anchor onClick={ this.onPreviousClicked }>Previous</Anchor>
        <span>Page { page > totalPageCount ? totalPageCount : page } of { totalPageCount }</span>
        <Anchor onClick={ this.onNextClicked }>Next</Anchor>
        <Anchor onClick={ this.onLastClicked }>Last</Anchor>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPaginate);
