import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'components/Button';
import Container from 'components/Container';
import LabelledSelect from 'components/LabelledSelect';
import './styles.scss';

class Filter extends Component {

  filters = () => Object.keys(this.props.filters).map((key, i) => {

    const { label, emptyLabel, items, onSelectionChanged, value } = this.props.filters[key];

    return (
      <LabelledSelect
        emptyLabel={ emptyLabel  }
        label={ label }
        items={ items }
        onSelectionChanged={ onSelectionChanged }
        value={ value }/>
    )
  });

  render() {
    const { className, onFilter } = this.props;

    return (
      <Container className={ classNames(className, 'cars-characteristics-filter') }>
        <this.filters />
        <Button className="button" label="Filter" onClick={ onFilter } />
      </Container>
    );
  }
}

Filter.propTypes = {
  filters: PropTypes.objectOf(PropTypes.shape({
    emptyLabel: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })).isRequired,
    onSelectionChanged: PropTypes.func.isRequired,
    value: PropTypes.string
  })).isRequired,
  onFilter: PropTypes.func.isRequired
};

export default Filter;
