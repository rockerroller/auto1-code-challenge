import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import actions from 'actions';
import Button from 'components/Button';
import Container from 'components/Container';
import { getLabelName, getLabelInfo } from 'utils/car';
import './styles.scss';

const mapStateToProps = ({ detail, store }) => ({
  car: detail.car,
  favourite: store.favourite
});

const mapDispatchToProps = (dispatch) => ({
  toggleFavourite: (stockNumber) => dispatch(actions.store.toggleFavourite(stockNumber)),
});

class Info extends Component {

  isFavourited() {
    const { car, favourite } = this.props;
    if (car) {
      return favourite[car.stockNumber];
    }
    return false;
  }

  onFavouriteClick = () => {
    if (this.props.car) {
      this.props.toggleFavourite(this.props.car.stockNumber);
    }
  }

  render() {
    const { car, className, isLoading } = this.props;
    const favourited = this.isFavourited();

    return (
      <div className={ classNames(className, 'car-detail-info', { loading: isLoading }) }>
        <Container className="info-container" border={ false }>
          <div className="name">{ getLabelName(car) }</div>
          <div className="info">{ getLabelInfo(car) }</div>
          <div className="notice">
            This car is currently available and can be delivered as soon as
            tomorrow morning. Please be aware that delivery times shown in
            this page are not definitive and may change due to bad weather
            conditions.
          </div>
        </Container>
        <Container className="favourite-container" border={ false }>
          <Container className="favourite">
            <div className="label">
              If you like this car, click the button and save it in your collection of favourite items.
            </div>
            <Button className="save" onClick={ this.onFavouriteClick }>
              { !favourited ? 'Save' : 'Saved!' }
            </Button>
          </Container>
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);
