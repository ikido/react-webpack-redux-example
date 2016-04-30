import expect from 'expect';
import * as actions from 'lib/actions';
import { mapStateToProps, mapDispatchToProps } from 'views/stories/filter_container';

describe('FilterContainer', () => {

	describe('mapStateToProps', () => {

		it('should correctly map state to props', () => {

	  	let state = {
	  		storiesSortOrder: 'oldest',
	  		storiesSelectedTags: ['tag 1'],
	  		storiesSelectedAuthors: ['author 1'],
	  		storiesSelectedIssues: ['issue 1'],
	  		stories: [
	  			{
	  				tags: ['tag 1', 'tag 2'],
	  				author: { full_name: 'author 1' },
	  				issue: ['issue 1', 'issue 2'],
	  			},
	  			{
	  				tags: ['tag 2'],
	  				author: { full_name: 'author 2' },
	  				issue: ['issue 2']
	  			}
	  		]
	  	};
	    
	    let mappedState = {
	    	sortOrder: 'oldest',
	    	tags: ['tag 1', 'tag 2'],
	    	authors: ['author 1', 'author 2'],
	    	issues: ['issue 1', 'issue 2'],
	    	selectedTags: ['tag 1'],
	    	selectedAuthors: ['author 1'],
	    	selectedIssues: ['issue 1']
	    }

	    expect(mapStateToProps(state)).toEqual(mappedState);
	  });

	});

	describe('mapDispatchToProps', () => {
		let dispatch, functions;

		beforeEach(function () {
		  dispatch = expect.createSpy();
		  functions = mapDispatchToProps(dispatch);
		});

		it('should correctly map setSortOrder callback to dispatched action', () => {
			let sortOrder = 'oldest';
			functions.setSortOrder(sortOrder);
			expect(dispatch.calls[0].arguments[0]).toEqual(actions.setStoriesSortOrder(sortOrder))
			
	  });

	  it('should correctly map setSelectedTags callback to dispatched action', () => {
	  	let tag = 'some tag';
	  	functions.setSelectedTags([{ value: tag }]);
	  	expect(dispatch.calls[0].arguments[0]).toEqual(actions.setStoriesSelectedTags([tag]))
	  });

	  it('should correctly map setSelectedAuthors callback to dispatched action', () => {
	  	let author = 'some author';
	  	functions.setSelectedAuthors([{ value: author }]);
	  	expect(dispatch.calls[0].arguments[0]).toEqual(actions.setStoriesSelectedAuthors([author]))
	  });

	  it('should correctly map setSelectedIssues callback to dispatched action', () => {
	  	let issue = 'some issue';
	  	functions.setSelectedIssues([{ value: issue }]);
	  	expect(dispatch.calls[0].arguments[0]).toEqual(actions.setStoriesSelectedIssues([issue]))
	  });
	  
	});

});