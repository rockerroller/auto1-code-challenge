import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

class Button extends Component {

  render() {
    const { className, label, onClick } = this.props;

    return (
      <button className={ classNames(className,'button-default') } onClick={ onClick }>
        { label }
      </button>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;
