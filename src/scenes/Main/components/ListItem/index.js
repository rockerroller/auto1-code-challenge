import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Container from 'components/Container';
import './styles.scss';

class ListItem extends Component {


  render() {
    const capitalize = (word) => word.replace(/^\w/, c => c.toUpperCase());
    const { item, isLoading } = this.props;
    const {
      stockNumber,
      manufacturerName,
      modelName,
      color,
      mileage,
      fuelType,
      pictureUrl
    } = item;
    const name = `${manufacturerName} ${modelName}`;
    const stock =`Stock # ${stockNumber} - ` +
      `${mileage.number.toLocaleString('pt-BR')} ${mileage.unit.toUpperCase()} - ` +
      `${capitalize(fuelType)} - ` +
      `${capitalize(color)}`;

    return (
      <Container className="car-list-item">
        <img src={ pictureUrl }/>
        <div class="info">
          <div className="name">{ name }</div>
          <div className="stock">{ stock  }</div>
          <Link to={ `detail/${stockNumber}` }>View details</Link>
        </div>
      </Container>
    );
  }
}

ListItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.shape({
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

ListItem.defaultProps = {
  isLoading: false,
};

export default ListItem;
