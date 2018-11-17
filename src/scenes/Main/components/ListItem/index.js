import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Anchor from 'components/Anchor';
import Container from 'components/Container';
import './styles.scss';

class ListItem extends Component {

  getLabels() {
    const { item, isLoading } = this.props;
    if (!isLoading) {
      const capitalize = (word) => word.replace(/^\w/, c => c.toUpperCase());
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

      return { name, stock, stockNumber, pictureUrl };
    }

    return { name: '', stock: '', pictureUrl: null };
  }

  render() {
    const { isLoading } = this.props;
    const { name, stock, stockNumber, pictureUrl } = this.getLabels();

    return (
      <Container className={ classNames('car-list-item', { loading: isLoading }) }>
        <img className="picture" src={ pictureUrl } alt=""/>
        <div className="info">
          <div className="name">{ name }</div>
          <div className="stock">{ stock  }</div>
          {
            isLoading ?
            <Anchor /> :
            <Link to={ `detail/${stockNumber}` }>View details</Link>
          }
        </div>
      </Container>
    );
  }
}

export default ListItem;
