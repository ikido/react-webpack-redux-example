import { connect } from 'react-redux';
import StoryModal from 'views/stories/modal';
import { hideStoryModal } from 'lib/actions';
import find from 'lodash/find';

const mapStateToProps = (state) => {
  let show = state.storyModal.show;
  let id = state.storyModal.storyId;
  let story = id ? find(state.stories, { id }) : null;

  return { show, story };
};

const mapDispatchToProps = (dispatch) => {
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
