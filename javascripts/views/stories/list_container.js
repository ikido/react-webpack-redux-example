import { connect } from 'react-redux';
import StoryList from 'views/stories/list';
import { fetchStories, showStoryModal } from 'lib/actions';
import intersection from 'lodash/intersection';
import includes from 'lodash/includes';

const mapStateToProps = (state) => {

  let stories = state.stories;

  // filter by tags
  if (state.storiesSelectedTags.length > 0) {
    stories = stories.filter(s => { 
      return (intersection(state.storiesSelectedTags, s.tags).length > 0)
    })
  }

  // filter by authors
  if (state.storiesSelectedAuthors.length > 0) {
    stories = stories.filter(s =>
      includes(state.storiesSelectedAuthors, s.author.full_name)
    )
  }

  // filter by issues
  if (state.storiesSelectedIssues.length > 0) {
    stories = stories.filter(s => {
      return (intersection(state.storiesSelectedIssues, s.issue).length > 0)
    })
  }


  // sort by default
  stories.sort((a,b) => a.date < b.date);

  // reverse sort order if needed
  if (state.storiesSortOrder === 'oldest') {
    stories = stories.slice().reverse();
  }

  return { stories }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchStories() {
      dispatch(fetchStories())
    },
    showStoryModal(storyId) {
      dispatch(showStoryModal(storyId))
    }
  }
}

const StoryListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(StoryList);

export default StoryListContainer
