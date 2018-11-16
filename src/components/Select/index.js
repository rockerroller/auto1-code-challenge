import React, { Component } from 'react';
import Container from 'components/Container';
import './styles.scss';

class Select extends Component {
  render() {
    return (
      <Container className="select-container">
        <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </Container>
    );
  }
}

export default Select;
