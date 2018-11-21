import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from 'components/Logo';
import './styles.scss';

class NotFound extends Component {
  render() {
    return (
      <div className='not-found'>
        <Logo />
        <h1>404 - Not Found</h1>
        <div>Sorry, the page you are looking for does not exist.</div>
        <div>You can always go back to the <Link to="/">homepage</Link>.</div>
      </div>
    );
  }
}

export default NotFound;
