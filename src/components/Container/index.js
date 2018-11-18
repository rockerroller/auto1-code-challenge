import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

const Container = ({ children, className, border }) => (
  <div className={ classNames(className, 'default-container', { border }) }>
    { children }
  </div>
);

Container.propTypes = {
  children: PropTypes.string.isRequired,
  border: PropTypes.bool
};

Container.defaultProps = {
  border: true
};

export default Container;
