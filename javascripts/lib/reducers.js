import { combineReducers } from 'redux';
import {
	REQUEST_ALL_STORIES,
	RECEIVE_ALL_STORIES,
	SET_STORIES_SORT_ORDER,
  SET_STORIES_SELECTED_TAGS
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

function storiesSelectedTags(state = [], action) {
  switch (action.type) {
    case SET_STORIES_SELECTED_TAGS:
      return action.tags
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  stories,
  storiesSortOrder,
  storiesSelectedTags
});

export default rootReducer
