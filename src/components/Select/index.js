import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Container from 'components/Container';
import './styles.scss';

class Select extends Component {

  onSelectionChanged = (evt) => {
    this.props.onSelectionChanged(evt.target.value);
  }

  items = () => {
    const { emptyLabel, emptyValue, hasEmptyOption, items } = this.props;
    const options = [];

    if (hasEmptyOption) {
      options.push(<option value={ emptyValue }>{ emptyLabel }</option>);
    }

    items.forEach(({ label, value }) => options.push(<option value={ value }>{ label }</option>));

    return options;
  }

  render() {
    const { className, onSelectionChanged } = this.props;

    return (
      <Container className={ classNames(className,'select-container') }>
        <select onChange={ this.onSelectionChanged }>
          <this.items />
        </select>
      </Container>
    );
  }
}

Select.propTypes = {
  emptyLabel: PropTypes.string,
  emptyValue: PropTypes.string,
  hasEmptyOption: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  onSelectionChanged: PropTypes.function
};

Select.defaultProps = {
  emptyLabel: 'Empty',
  emptyValue: '',
  hasEmptyOption: true,
  items: []
};

export default Select;