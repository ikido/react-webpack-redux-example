import { connect } from 'react-redux';
import StoryList from 'views/stories/list';
import { fetchStories } from 'lib/actions';

const mapStateToProps = (state) => {
  let stories = state.stories.sort((a,b) => a.date < b.date);

  if (state.storiesSortOrder === 'oldest') {
    stories = stories.slice().reverse();
  }

  return { stories }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchStories: () => {
      dispatch(fetchStories())
    }
  }
}

const StoryListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(StoryList);

export default StoryListContainer
