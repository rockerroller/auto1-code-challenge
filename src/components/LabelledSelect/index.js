import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from 'components/Select';
import './styles.scss';

const LabelledSelect = ({ className, emptyLabel, label, items, onSelectionChanged, value }) => (
  <div className={ classNames(className, 'labelled-select-default') }>
    <label>{ label }</label>
    <Select
      className="select"
      items={ items }
      emptyLabel={ emptyLabel }
      onSelectionChanged={ onSelectionChanged }
      value={ value }/>
  </div>
);

LabelledSelect.propTypes = {
  emptyLabel: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  onSelectionChanged: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default LabelledSelect;
