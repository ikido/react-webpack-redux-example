'use strict';

import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';

export default class Header extends Component {
  render() {
    return (
      <Navbar inverse fixedTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">InkSkill</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>        
      </Navbar>
    );
  }
}