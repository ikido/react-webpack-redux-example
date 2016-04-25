import { combineReducers } from 'redux';
import {
	REQUEST_ALL_STORIES,
	RECEIVE_ALL_STORIES,
	SET_STORIES_SORT_ORDER
} from 'lib/actions';

function stories(state = [], action) {
  switch (action.type) {
    case RECEIVE_ALL_STORIES:
      return action.stories
    default:
      return state;
  }
}

function storiesSortOrder(state = 'oldest', action) {
	switch (action.type) {
    case SET_STORIES_SORT_ORDER:
      return action.sortOrder
    default:
      return state;
  }
}

const rootReducer = combineReducers({ stories, storiesSortOrder });

export default rootReducer
