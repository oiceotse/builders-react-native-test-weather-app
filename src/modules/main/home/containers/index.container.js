import {IndexComponent} from '../components';
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectors, operations} from '../store';

const mapStateToProps = state => ({
  isLoading: selectors.getWeatherState.getWeatherStatus(state).isLoading,
  isLoaded: selectors.getWeatherState.getWeatherStatus(state).isLoaded,
  failure: selectors.getWeatherState.getWeatherStatus(state).failure,
  weather: selectors.getWeatherState.getWeatherResult(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getWeather: operations.getCurrentWeather,
    },
    dispatch,
  );

class IndexContainer extends React.Component {
  render() {
    return <IndexComponent {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);
