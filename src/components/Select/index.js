import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import clickOutsideHandler from "react-onclickoutside";
import Container from 'components/Container';
import './styles.scss';

class Select extends Component{

  state = {
    listOpen: false,
    items: [],
    selected: null
  }

  handleClickOutside(e){
    this.setState({ listOpen: false });
  }

  onSelectionChanged = (selected) => {
    this.props.onSelectionChanged(selected.value);
    this.setState({ listOpen: false, selected });
  }

  onToggleList = () => {
    this.setState((prevState) => ({ listOpen: !prevState.listOpen }));
  }

  componentWillMount() {

    const { emptyLabel, emptyValue, hasEmptyOption, items } = this.props;

    if (hasEmptyOption) {
      items.splice(0, 0, { label: emptyLabel, value: emptyValue });
    }

    this.setState({ items, selected: items[0] });
  }

  items = () => {
    if (!this.state.listOpen) {
      return null;
    }

    const options = [];

    this.state.items.forEach((item, i) => options.push(
      <li key={ i } value={ item.value } onClick={ () => this.onSelectionChanged(item) }>{ item.label }</li>
    ));

    return (
      <ul className="options">
        { options }
      </ul>
    )
  }

  render(){
    const{ className } = this.props;
    const{ listOpen, selected } = this.state;
    return(
      <Container className={ classNames(className, 'select-default', { open: listOpen }) }>
        <div className="label" onClick={ this.onToggleList }>
          { selected.label }
        </div>
        <this.items />
      </Container>
    )
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
  onSelectionChanged: PropTypes.func,
  value: PropTypes.string
};

Select.defaultProps = {
  emptyLabel: 'Empty',
  emptyValue: '',
  hasEmptyOption: true,
  items: [],
  value: ''
};

export default clickOutsideHandler(Select);
