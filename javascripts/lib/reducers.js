import { combineReducers } from 'redux';
import { REQUEST_ALL_STORIES, RECEIVE_ALL_STORIES } from 'lib/actions';

function stories(state = [], action) {
  switch (action.type) {
    case RECEIVE_ALL_STORIES:
      return action.stories
    default:
      return state;
  }
}

const rootReducer = combineReducers({ stories });

export default rootReducer
