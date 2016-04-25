'use strict';

import React, { Component, PropTypes } from 'react';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

export default class StoryList extends Component {

	static propTypes = {
		story: PropTypes.object.isRequired
	}

  render() {
    return (
      <ListGroupItem>
      	{ this.props.story.title }
      	<br />
      	<small>{ new Date(this.props.story.date).toString() }</small>
      </ListGroupItem>
    );
  }
}