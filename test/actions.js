import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import * as actions from '../javascripts/lib/actions';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);


describe('actions', () => {

	describe('setStoriesSortOrder', () => {

	  it('should set sort order for list of stories', () => {
	  	let sortOrder = 'oldest';
	    const expectedAction = {
	      type: actions.SET_STORIES_SORT_ORDER,
	      sortOrder
	    };

	    expect(actions.setStoriesSortOrder(sortOrder)).toEqual(expectedAction);
	  });

	});

	describe('setStoriesSelectedTags', () => {

	  it('should set selected tags for list of stories', () => {
	  	let tags = ['test tag'];
	    const expectedAction = {
	      type: actions.SET_STORIES_SELECTED_TAGS,
	      tags
	    };

	    expect(actions.setStoriesSelectedTags(tags)).toEqual(expectedAction);
	  });

	});

	describe('setStoriesSelectedAuthors', () => {

	  it('should set selected authors for list of stories', () => {
	  	let authors = ['test author'];
	    const expectedAction = {
	      type: actions.SET_STORIES_SELECTED_AUTHORS,
	      authors
	    };

	    expect(actions.setStoriesSelectedAuthors(authors)).toEqual(expectedAction);
	  });

	});

	describe('setStoriesSelectedIssues', () => {

	  it('should set selected issues for list of stories', () => {
	  	let issues = ['test issue'];
	    const expectedAction = {
	      type: actions.SET_STORIES_SELECTED_ISSUES,
	      issues
	    };

	    expect(actions.setStoriesSelectedIssues(issues)).toEqual(expectedAction);
	  });

	});

	describe('fetchStories', () => {
	  afterEach(() => {
	    nock.cleanAll();
	  });

	  let host = 'http://example.com';
	  let stories = [ { id: 1, title: 'a story' } ];

	  it('creates RECEIVE_ALL_STORIES when fetching of stories has been done', () => {
	    nock(host)
	      .get('/api/data.json')
	      .reply(200, stories)

	    const expectedActions = [
	      { type: actions.REQUEST_ALL_STORIES },
	      { type: actions.RECEIVE_ALL_STORIES, stories }
	    ];

	    const store = mockStore({ stories: [] })

	    return store.dispatch(actions.fetchStories(host))
	      .then(() => { // return of async actions
	        expect(store.getActions()).toEqual(expectedActions)
	      })
	  })
	})


});