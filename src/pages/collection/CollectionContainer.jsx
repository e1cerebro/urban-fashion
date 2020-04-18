import { isCollectionLoaded } from '../../store/selectors/shopSelctors';
import WithSpinner from '../../components/with-spinner/WithSpinner';
import Collection from './Collection';
import { compose } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    isLoading: !isCollectionLoaded(state),
  };
};

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

export default CollectionPageContainer;
