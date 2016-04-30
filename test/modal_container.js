import expect from 'expect';
import * as actions from 'lib/actions';
import { mapStateToProps, mapDispatchToProps } from 'views/stories/modal_container';

describe('ModalContainer', () => {

	describe('mapStateToProps', () => {

		it('should correctly map state to props when storyId is set', () => {

	  	let state = {
	  		storyModal: {
	  			show: true,
	  			storyId: 1
	  		},
	  		stories: [
	  			{ id: 1, title: 'story 1' }
	  		]
	  	};
	    
	    let mappedState = {
	    	show: true,
	    	story: state.stories[0]
	    }

	    expect(mapStateToProps(state)).toEqual(mappedState);
	  });

	  it('should correctly map state to props when storyId is not set', () => {

	  	let state = {
	  		storyModal: {
	  			show: false,
	  			storyId: null
	  		},
	  		stories: [
	  			{ id: 1, title: 'story 1' }
	  		]
	  	};
	    
	    let mappedState = {
	    	show: false,
	    	story: null
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

		it('should correctly map onHide callback to dispatched action', () => {
			let sortOrder = 'oldest';
			functions.onHide();
			expect(dispatch.calls[0].arguments[0]).toEqual(actions.hideStoryModal())
	  });

	});

});