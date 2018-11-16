import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './styles.scss';

const Container = ({ children, className }) => (
  <div className={ classNames(className, 'default-container') }>
    { children }
  </div>
);

export default Container;
