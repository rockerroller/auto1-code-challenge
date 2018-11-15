import React, { Component } from 'react';
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

  items = () => this.state.items.map((item) => <span className="item">{ item.title }</span>);

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
