import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

const Button = ({ className, children, onClick }) => (
  <button className={ classNames(className, 'button-default') } onClick={ onClick }>
    { children }
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;
