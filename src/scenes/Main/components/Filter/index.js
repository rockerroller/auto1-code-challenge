import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'components/Button';
import Container from 'components/Container';
import Select from 'components/Select';
import './styles.scss';

class Filter extends Component {

  filters = () => Object.keys(this.props.filters).map((key, i) => {

    const { label, emptyLabel, items } = this.props.filters[key];

    return (
      <Fragment key={ i }>
        <label>{ label }</label>
        <Select className="select" items={ items } emptyLabel={ emptyLabel }/>
      </Fragment>
    )
  });

  render() {
    const { className } = this.props;

    return (
      <Container className={ classNames(className, 'cars-characteristics-filter') }>
        <this.filters />
        <Button className="button" label="Filter" />
      </Container>
    );
  }
}

Filter.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.shape({
    emptyLabel: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })).isRequired,
    onSelectionChanged: PropTypes.func.isRequired
  })).isRequired
};

export default Filter;
