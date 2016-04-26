'use strict';

import React, { Component, PropTypes } from 'react';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Radio from 'react-bootstrap/lib/Radio';
import Select from 'react-select';

export default class StoryFilter extends Component {

  static propTypes = {
    sortOrder: PropTypes.oneOf(['oldest', 'newest']),
    setSortOrder: PropTypes.func.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    issues: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedTags: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedIssues: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedAuthors: PropTypes.arrayOf(PropTypes.string).isRequired,
    setSelectedTags: PropTypes.func.isRequired,
    setSelectedAuthors: PropTypes.func.isRequired,
    setSelectedIssues: PropTypes.func.isRequired
  }

  getTagOptions = () => {
    return this.props.tags.map(t => { return { value: t, label: t } })
  }

  getAuthorOptions = () => {
    return this.props.authors.map(t => { return { value: t, label: t } })
  }

  getIssueOptions = () => {
    return this.props.issues.map(t => { return { value: t, label: t } })
  }

  render() {
    return (
      <Col sm={4} md={3} className='sidebar'>
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
          <FormGroup>
            <ControlLabel>Tags</ControlLabel>
            <Select
              multi
              options={ this.getTagOptions() }
              onChange={ this.props.setSelectedTags }
              value={ this.props.selectedTags }
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Authors</ControlLabel>
            <Select
              multi
              options={ this.getAuthorOptions() }
              onChange={ this.props.setSelectedAuthors }
              value={ this.props.selectedAuthors }
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Issues</ControlLabel>
            <Select
              multi
              options={ this.getIssueOptions() }
              onChange={ this.props.setSelectedIssues }
              value={ this.props.selectedIssues }
            />
          </FormGroup>
        </form>
      </Col>
    );
  }
}


