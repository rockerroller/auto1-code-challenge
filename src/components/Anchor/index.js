import React from 'react';
import PropTypes from 'prop-types';
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

Anchor.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func
};

export default Anchor;
