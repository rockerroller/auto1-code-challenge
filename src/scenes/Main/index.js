import React, { Component } from 'react';
import classNames from 'classnames';
import Filter from 'components/Filter';
import './styles.scss';

class Main extends Component {
  render() {
    return (
      <main className="main">
        <Filter className="filter" title="Test" />
      </main>
    );
  }
}

export default Main;
