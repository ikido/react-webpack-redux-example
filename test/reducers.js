import expect from 'expect';
import reducer from 'lib/reducers';
import * as actions from 'lib/actions';

describe('reducers', () => {

	describe('stories reducer', () => {

	  it('should return the initial state', () => {
	    expect(
	      reducer(undefined, {}).stories
	    ).toEqual([]);
	  });

	  it('should handle RECEIVE_ALL_STORIES', () => {
	  	let stories = [ { id: 1, title: 'test story' } ];

	    expect(
	      reducer([], {
	        type: actions.RECEIVE_ALL_STORIES,
	        stories
	      }).stories
	    ).toEqual(stories)

  	});

	});

	describe('storiesSortOrder reducer', () => {

	  it('should return the initial state', () => {
	    expect(
	      reducer(undefined, {}).storiesSortOrder
	    ).toEqual('oldest');
	  });

	  it('should handle SET_STORIES_SORT_ORDER', () => {
	  	let sortOrder = 'newest';

	    expect(
	      reducer([], {
	        type: actions.SET_STORIES_SORT_ORDER,
	        sortOrder
	      }).storiesSortOrder
	    ).toEqual(sortOrder)

  	});

	});

	describe('storiesSelectedTags reducer', () => {

	  it('should return the initial state', () => {
	    expect(
	      reducer(undefined, {}).storiesSelectedTags
	    ).toEqual([]);
	  });

	  it('should handle RECEIVE_ALL_STORIES', () => {
	  	let tags = [ 'some tag' ];

	    expect(
	      reducer([], {
	        type: actions.SET_STORIES_SELECTED_TAGS,
	        tags
	      }).storiesSelectedTags
	    ).toEqual(tags)

  	});

	});

	describe('storiesSelectedAuthors reducer', () => {

	  it('should return the initial state', () => {
	    expect(
	      reducer(undefined, {}).storiesSelectedAuthors
	    ).toEqual([]);
	  });

	  it('should handle SET_STORIES_SELECTED_AUTHORS', () => {
	  	let authors = [ 'test author' ];

	    expect(
	      reducer([], {
	        type: actions.SET_STORIES_SELECTED_AUTHORS,
	        authors
	      }).storiesSelectedAuthors
	    ).toEqual(authors)

  	});

	});

	describe('storiesSelectedIssues reducer', () => {

	  it('should return the initial state', () => {
	    expect(
	      reducer(undefined, {}).storiesSelectedIssues
	    ).toEqual([]);
	  });

	  it('should handle SET_STORIES_SELECTED_ISSUES', () => {
	  	let issues = [ 'test issue' ];

	    expect(
	      reducer([], {
	        type: actions.SET_STORIES_SELECTED_ISSUES,
	        issues
	      }).storiesSelectedIssues
	    ).toEqual(issues)

  	});

	});

	describe('storyModal reducer', () => {

	  it('should return the initial state', () => {
	    expect(
	      reducer(undefined, {}).storyModal
	    ).toEqual({ show: false, storyId: null });
	  });

	  it('should handle SHOW_STORY_MODAL', () => {
	  	let storyId = 1;

	    expect(
	      reducer([], {
	        type: actions.SHOW_STORY_MODAL,
	        storyId
	      }).storyModal
	    ).toEqual({ storyId, show: true });

  	});

  	it('should handle HIDE_STORY_MODAL', () => {

	    expect(
	      reducer([], {
	        type: actions.HIDE_STORY_MODAL
	      }).storyModal
	    ).toEqual({ storyId: null, show: false });

  	});

	});

  
})

