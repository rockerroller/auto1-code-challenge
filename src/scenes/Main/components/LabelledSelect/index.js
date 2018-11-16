import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Select from 'components/Select';
import './styles.scss';

class LabelledSelect extends Component {

  render() {
    const { className, emptyLabel, label, items, onSelectionChanged } = this.props;

    return (
      <Fragment>
        <label>{ label }</label>
        <Select className={ className } items={ items } emptyLabel={ emptyLabel } onSelectionChanged={ onSelectionChanged }/>
      </Fragment>
    );
  }
}

LabelledSelect.propTypes = {
  emptyLabel: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  onSelectionChanged: PropTypes.func.isRequired
};

export default LabelledSelect;
