'use strict';

import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import StoryIndex from 'views/stories/index';
import Layout from 'views/layout/layout';
import Notfound from 'views/errors/not_found';
import { Provider } from 'react-redux';
import configureStore from 'lib/configure_store';

const routes =
	<Provider store={configureStore()}>
		<Router history={ hashHistory }>
			<Route path='/' component={ Layout }>
				<IndexRoute component={ StoryIndex } />
				<Route path="*" component={ Notfound } />
			</Route>
		</Router>
	</Provider>

export default routes