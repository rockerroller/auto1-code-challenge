import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from 'components/Logo';
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

  items = () => this.state.items.map(({ title, path }, i) =>
    <Link key={ i } to={ path }>{ title }</Link>
  );

  render() {
    return (
      <header className="app-header">
        <Logo className="logo" />
        <nav>
          <this.items />
        </nav>
      </header>
    );
  }
}

export default Header;
