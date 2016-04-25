'use strict';

import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Header from 'views/layout/header';

export default class Layout extends Component {
  render() {
    return (
      <Grid fluid>
      	<Header />
        { this.props.children }
      </Grid>
    );
  }
}
