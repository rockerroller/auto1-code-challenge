import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import actions from 'actions';
import Info from './components/Info';
import './styles.scss';

const mapStateToProps = ({ detail }) => ({
  isLoading: detail.isFetching,
  car: detail.car,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCar: (stockNumber) => dispatch(actions.detail.fetchCar(stockNumber)),
});

export class Detail extends Component {

  componentWillMount() {
    const { car, fetchCar, match } = this.props;
    const stockNumber = parseInt(match.params.id);
    if (!car || (car && car.stockNumber !== stockNumber)) {
      fetchCar(stockNumber);
    }
  }

  render() {
    const { car, isLoading } = this.props;
    const pictureUrl = car && car.pictureUrl;

    return (
      <main className="detail-scene">
        <div className={ classNames('picture', { loading: isLoading }) }>
          <img src={ pictureUrl } alt=""/>
        </div>
        <div className="content-wrapper">
          <Info className="wrapper" />
        </div>
      </main>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
