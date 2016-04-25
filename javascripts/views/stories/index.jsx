'use strict';

import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import StoryFilterContainer from 'views/stories/filter_container';
import StoryListContainer from 'views/stories/list_container';


export default class StoryIndex extends Component {
  render() {
    return (
      <Row>
        <StoryFilterContainer />
        <StoryListContainer />
      </Row>
    );
  }
}
