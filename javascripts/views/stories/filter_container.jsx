import { connect } from 'react-redux';
import StoryFilter from 'views/stories/filter';
import {
  setStoriesSortOrder,
  setStoriesSelectedTags,
  setStoriesSelectedAuthors,
  setStoriesSelectedIssues
} from 'lib/actions';
import uniq from 'lodash/uniq';
import flatten from 'lodash/flatten';

const mapStateToProps = (state) => {
  return {
    sortOrder: state.storiesSortOrder,
    tags: uniq(flatten(state.stories.map(story => story.tags))),
    authors: uniq(state.stories.map(story => story.author.full_name)),
    issues: uniq(flatten(state.stories.map(story => story.issue))),
    selectedTags: state.storiesSelectedTags,
    selectedAuthors: state.storiesSelectedAuthors,
    selectedIssues: state.storiesSelectedIssues
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setSortOrder(sortOrder) {
      dispatch(setStoriesSortOrder(sortOrder))
    },
    setSelectedTags(items) {
      items = !!items ? items : [];
      dispatch(setStoriesSelectedTags(items.map(t => t.value)))
    },
    setSelectedAuthors(items) {
      items = !!items ? items : [];
      dispatch(setStoriesSelectedAuthors(items.map(t => t.value)))
    },
    setSelectedIssues(items) {
      items = !!items ? items : [];
      dispatch(setStoriesSelectedIssues(items.map(t => t.value)))
    }
  }
}

const StoryFilterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(StoryFilter);

export default StoryFilterContainer
