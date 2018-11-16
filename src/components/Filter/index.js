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
      <Container className={ classNames(className, 'filter') }>
        <Select items={ items }/>
      </Container>
    );
  }
}

export default Filter;
