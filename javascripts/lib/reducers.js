import { combineReducers } from 'redux';
import {
	REQUEST_ALL_STORIES,
	RECEIVE_ALL_STORIES,
	SET_STORIES_SORT_ORDER,
  SET_STORIES_SELECTED_TAGS,
  SHOW_STORY_MODAL,
  HIDE_STORY_MODAL
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

let defaultStoryModalState = { show: false, storyId: null }
function storyModal(state = defaultStoryModalState, action) {
  switch (action.type) {
    case SHOW_STORY_MODAL:
      return { show: true, storyId: action.storyId };
    case HIDE_STORY_MODAL:
      return defaultStoryModalState;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  stories,
  storiesSortOrder,
  storiesSelectedTags,
  storyModal
});

export default rootReducer
