import fetch from 'isomorphic-fetch'

export const REQUEST_ALL_STORIES = 'REQUEST_ALL_STORIES'
export const RECEIVE_ALL_STORIES = 'RECEIVE_ALL_STORIES'

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

export function fetchStories() {
  return dispatch => {
    dispatch(requestAllStories())
    return fetch('/api/data.json')
      .then(response => response.json())
      .then(json => dispatch(receiveAllStories(json)))
  }
}
