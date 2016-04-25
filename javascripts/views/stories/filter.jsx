'use strict';

import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

export default class StoryFilter extends Component {
  render() {
    return (
      <Col sm={3} md={2} className='sidebar'>
        <Nav bsStyle="pills" stacked activeKey={1}>
          <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
          <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
          <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
        </Nav>
      </Col>
    );
  }
}


