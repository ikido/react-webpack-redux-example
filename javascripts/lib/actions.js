import fetch from 'isomorphic-fetch';

export const REQUEST_ALL_STORIES = 'REQUEST_ALL_STORIES';
export const RECEIVE_ALL_STORIES = 'RECEIVE_ALL_STORIES';
export const SET_STORIES_SORT_ORDER = 'SET_STORIES_SORT_ORDER';

function requestAllStories() {
  return {
    type: REQUEST_ALL_STORIES
  }
}

function receiveAllStories(json) {
  return {
    type: RECEIVE_ALL_STORIES,
    stories: json
  }
}

export function setStoriesSortOrder(sortOrder) {
  return {
    type: SET_STORIES_SORT_ORDER,
    sortOrder: sortOrder
  }
}

export function fetchStories() {
  return dispatch => {
    dispatch(requestAllStories())
    return fetch('/api/data.json')
      .then(response => response.json())
      .then(json => dispatch(receiveAllStories(json)))
  }
}
