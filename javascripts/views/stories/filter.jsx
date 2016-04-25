'use strict';

import React, { Component, PropTypes } from 'react';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Radio from 'react-bootstrap/lib/Radio';

export default class StoryFilter extends Component {

  static propTypes = {
    sortOrder: PropTypes.oneOf(['oldest', 'newest']),
    setSortOrder: PropTypes.func.isRequired
  }

  render() {
    return (
      <Col sm={3} md={2} className='sidebar'>
        <h2>Filters</h2>
        <form>
          <FormGroup>
            <ControlLabel>Story date</ControlLabel>
            <Radio
              checked={ this.props.sortOrder === 'oldest' }
              onChange={ this.props.setSortOrder.bind(this, 'oldest') }
            >
              Oldest first
            </Radio>
            <Radio
              checked={ this.props.sortOrder === 'newest' }
              onChange={ this.props.setSortOrder.bind(this, 'newest') }
            >
              Newest first
            </Radio>
          </FormGroup>
        </form>
      </Col>
    );
  }
}


