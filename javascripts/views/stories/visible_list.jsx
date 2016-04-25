import { connect } from 'react-redux';
import StoryList from 'views/stories/list';
import { fetchStories } from 'lib/actions';

const mapStateToProps = (state) => {
  return {
    stories: state.stories
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchStories: () => {
      dispatch(fetchStories())
    }
  }
}

const VisibleStoryList = connect(
	mapStateToProps,
	mapDispatchToProps
)(StoryList);

export default VisibleStoryList
