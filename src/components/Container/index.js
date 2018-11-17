import React from 'react';
import classNames from 'classnames';
import './styles.scss';

const Container = ({ children, className }) => (
  <div className={ classNames(className, 'default-container') }>
    { children }
  </div>
);

export default Container;
