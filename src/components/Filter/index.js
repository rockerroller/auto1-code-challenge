import React, { Component } from 'react';
import classNames from 'classnames';
import Container from 'components/Container';
import Select from 'components/Select';
import './styles.scss';

class Filter extends Component {
  render() {
    const { className } = this.props;
    return (
      <Container className={ classNames(className, 'filter') }>
        <Select />
      </Container>
    );
  }
}

export default Filter;
