import { connect } from 'react-redux';
import StoryModal from 'views/stories/modal';
import { hideStoryModal } from 'lib/actions';
import find from 'lodash/find';

export const mapStateToProps = (state) => {
  let show = state.storyModal.show;
  let id = state.storyModal.storyId;
  let story = id ? find(state.stories, { id }) : null;

  return { show, story };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onHide() {
      dispatch(hideStoryModal());
    }
  };
};

const StoryModalContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(StoryModal);

export default StoryModalContainer;
