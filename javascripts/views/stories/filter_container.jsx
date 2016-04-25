import { connect } from 'react-redux';
import StoryFilter from 'views/stories/filter';
import {
  setStoriesSortOrder,
  setStoriesSelectedTags
} from 'lib/actions';
import uniq from 'lodash/uniq';
import flatten from 'lodash/flatten';

const mapStateToProps = (state) => {
  return {
    sortOrder: state.storiesSortOrder,
    tags: uniq(flatten(state.stories.map(story => story.tags))),
    selectedTags: state.storiesSelectedTags
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setSortOrder(sortOrder) {
      dispatch(setStoriesSortOrder(sortOrder))
    },
    setSelectedTags(tags) {
      tags = !!tags ? tags : [];
      dispatch(setStoriesSelectedTags(tags.map(t => t.value)))
    }
  }
}

const StoryFilterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(StoryFilter);

export default StoryFilterContainer
