import expect from 'expect';
import * as actions from 'lib/actions';
import { mapStateToProps, mapDispatchToProps } from 'views/stories/list_container';

describe('ListContainer', () => {

	describe('mapStateToProps', () => {

		let state;

		beforeEach(function () {
		  state = {
				storiesSortOrder: 'oldest',
				storiesSelectedTags: [],
				storiesSelectedAuthors: [],
				storiesSelectedIssues: [],
				stories: [
					{
						tags: ['tag 1'],
						issue: ['issue 1'],
						author: {
							full_name: 'author 1'
						},
						date: new Date().getTime()
					},
					{
						tags: ['tag 2'],
						issue: ['issue 2'],
						author: {
							full_name: 'author 2'
						},
						date: new Date().getTime() + 1000
					}
				]
			};
		});

		it('should correctly map state to props when storiesSelectedTags is set', () => {			

			expect(mapStateToProps(state)).toEqual({ stories: state.stories });

			state.storiesSelectedTags = ['tag 1'];
			let mappedState = { stories: [ state.stories[0] ] };

			expect(mapStateToProps(state)).toEqual(mappedState);

		});

		it('should correctly map state to props when storiesSelectedAuthors is set', () => {			

			expect(mapStateToProps(state)).toEqual({ stories: state.stories });

			state.storiesSelectedAuthors = ['author 1'];
			let mappedState = { stories: [ state.stories[0] ] };

			expect(mapStateToProps(state)).toEqual(mappedState);

		});

		it('should correctly map state to props when storiesSelectedIssues is set', () => {			

			expect(mapStateToProps(state)).toEqual({ stories: state.stories });

			state.storiesSelectedIssues = ['issue 1'];
			let mappedState = { stories: [ state.stories[0] ] };

			expect(mapStateToProps(state)).toEqual(mappedState);

		});

	});

	describe('mapDispatchToProps', () => {
		let dispatch, functions;

		beforeEach(function () {
		  dispatch = expect.createSpy();
		  functions = mapDispatchToProps(dispatch);
		});

		it('should correctly map fetchStories callback to dispatched action', () => {
			functions.fetchStories();
			expect(dispatch.calls[0].arguments[0]).toEqual(actions.fetchStories())
	  });

	  it('should correctly map showStoryModal callback to dispatched action', () => {
	  	let storyId = 1;
			functions.showStoryModal(storyId);
			expect(dispatch.calls[0].arguments[0]).toEqual(actions.showStoryModal(storyId))
	  });

	});

});
