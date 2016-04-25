'use strict';

import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class StoryList extends Component {
  render() {
    return (
      <Row>
        <Col sm={3} md={2} className='sidebar'>
          <ul className="nav nav-sidebar">
            <li><a href>Nav item</a></li>
            <li><a href>Nav item again</a></li>
            <li><a href>One more nav</a></li>
            <li><a href>Another nav item</a></li>
            <li><a href>More navigation</a></li>
          </ul>
          <ul className="nav nav-sidebar">
            <li><a href>Nav item again</a></li>
            <li><a href>One more nav</a></li>
            <li><a href>Another nav item</a></li>
          </ul>
        </Col>
        <Col sm={9} smOffset={3} md={10} mdOffset={2} className='main'>
          <h1>Hello world</h1>
        </Col>                    
      </Row>
    );
  }
}


