'use strict';

import React, { Component, PropTypes } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Label from 'react-bootstrap/lib/Label';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Holder from 'react-holder';


export default class StoryModal extends Component {

	static propTypes = {
		story: PropTypes.object,
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired
	}

  renderStory() {
    return (
      <div>
        
        <Holder
          width="100%"
          height="400"
        />

        <h1>{ this.props.story.title }</h1>
        
        <h4 style={{ lineHeight: 1.5 }}>
          { this.props.story.tags.map((tag, i) => {
            return(
              <span key={i}>
                <Label bsStyle="default">{ tag }</Label>
                {' '}
              </span>
            )
          })}
        </h4>

        <div dangerouslySetInnerHTML={{ __html: this.props.story.body }}></div>

      </div>
    )
  }

  render() {
    return (
      <Modal bsSize='large' show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton />
        <Modal.Body>
          { this.props.story ? this.renderStory() : '' }          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}