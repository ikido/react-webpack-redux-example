'use strict';

import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import StoryFilter from 'views/stories/filter';
import VisibleStoryList from 'views/stories/visible_list';


export default class StoryIndex extends Component {
  render() {
    return (
      <Row>
        <StoryFilter />
        <VisibleStoryList />
      </Row>
    );
  }
}
