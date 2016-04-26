'use strict';

import React, { Component, PropTypes } from 'react';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

export default class StoryList extends Component {

	static propTypes = {
		story: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
	}

  render() {
    return (
      <ListGroupItem>
      	<a href="javascript:void(0)" onClick={ this.props.onClick }>{ this.props.story.title }</a>
      	<br />
      	<small>{ new Date(this.props.story.date).toString() }</small>
      </ListGroupItem>
    );
  }
}