import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from 'images/logo.png';
import './styles.scss';

class Header extends Component {

  state = {
    items: [{
      title: 'Purchase',
      path: '/'
    },{
      title: 'My Orders',
      path: '/'
    },{
      title: 'Sell',
      path: '/'
    }]
  }

  items = () => this.state.items.map(({ title, path }) =>
    <Link to={ path }>{ title }</Link>
  );

  render() {
    return (
      <header>
        <img src={ logo } alt="" />
        <nav>
          <this.items />
        </nav>
      </header>
    );
  }
}

export default Header;
