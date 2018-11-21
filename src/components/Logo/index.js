import React from 'react';
import classNames from 'classnames';
import logo from 'images/logo.png';
import './styles.scss';

const Logo = ({ className  }) => (
  <img className={ classNames(className, 'auto1-logo') } src={ logo } alt="" />
);

export default Logo;
