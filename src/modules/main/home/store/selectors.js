export const getWeatherState = {
  getWeatherStatus: state => {
    const {
      isLoading,
      isLoaded,
      failure,
    } = state.getCurrentWeatherReducerPersisted;
    return {isLoading, isLoaded, failure};
  },
  getWeatherResult: state => {
    const {resource} = state.getCurrentWeatherReducerPersisted;
    return resource;
  },
};
