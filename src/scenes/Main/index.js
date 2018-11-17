import React, { Component } from 'react';
import { connect } from 'react-redux';
import LabelledSelect from 'components/LabelledSelect';
import Filter from './components/Filter';
import List from './components/List';
import ListHeader from './components/ListHeader';
import actions from 'actions';
import './styles.scss';

const mapDispatchToProps = (dispatch) => ({
  fetchCars: () => dispatch(actions.main.fetchCars()),
});

class Main extends Component {

  componentWillMount() {
    this.props.fetchCars();
  }

  render() {

    return (
      <main className="main">
        <nav className="sidebar">
          <Filter />
        </nav>
        <div className="content">
          <ListHeader />
          <List className="list" />
        </div>
      </main>
    );
  }
}

export default connect(null, mapDispatchToProps)(Main);
