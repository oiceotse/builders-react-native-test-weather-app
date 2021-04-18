import {IndexComponent} from '../components';
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectors, operations} from '../store';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setViewed: operations.setViewed,
    },
    dispatch,
  );

class IndexContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <IndexComponent {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);
