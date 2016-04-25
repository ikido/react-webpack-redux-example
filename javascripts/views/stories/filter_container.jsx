import { connect } from 'react-redux';
import StoryFilter from 'views/stories/filter';
import { setStoriesSortOrder } from 'lib/actions';

const mapStateToProps = (state) => {
  return {
    sortOrder: state.storiesSortOrder
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setSortOrder: (sortOrder) => {
      dispatch(setStoriesSortOrder(sortOrder))
    }
  }
}

const StoryFilterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(StoryFilter);

export default StoryFilterContainer
