import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Anchor from 'components/Anchor';
import Container from 'components/Container';
import { getLabelName, getLabelInfo } from 'utils/car';
import './styles.scss';

class ListItem extends Component {

  getLabels() {
    const { item, isLoading } = this.props;
    if (!isLoading) {
      const { stockNumber, pictureUrl } = item;
      const name = getLabelName(item);
      const stock =getLabelInfo(item);

      return { name, stock, stockNumber, pictureUrl };
    }

    return { name: '', stock: '', pictureUrl: null };
  }

  render() {
    const { isLoading, item, onViewDetailsClick } = this.props;
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
            <Link to={`/detail/${stockNumber}`} onClick={ () => onViewDetailsClick(item) }>View details</Link>
          }
        </div>
      </Container>
    );
  }
}

ListItem.propTypes = {
  onViewDetailsClick: PropTypes.func.isRequired,
};

export default ListItem;
