import React, { Component } from 'react';
import classNames from 'classnames';
import Container from 'components/Container';
import Select from 'components/Select';
import './styles.scss';

class Filter extends Component {

  render() {

    const items = [ {
      label: 'foi',
      value: 'teste'
    } ]



    const { className } = this.props;
    return (
      <Container className={ classNames(className, 'cars-characteristics-filter') }>
        <label>Color</label>
        <Select className="select" items={ items } emptyLabel="All car colors"/>
        <label>Manufacturer</label>
        <Select className="select" items={ items } emptyLabel="All manufacturers"/>
      </Container>
    );
  }
}

export default Filter;
