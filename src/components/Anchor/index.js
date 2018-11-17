import React from 'react';
import classNames from 'classnames';
import './styles.scss';

const Anchor = ({ className, children, onClick, href }) => (
  <a
    className={ classNames(className, 'anchor-default') }
    href={ href }
    onClick={ onClick }>
    { children }
  </a>
);

export default Anchor;
