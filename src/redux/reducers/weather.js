import {GET_WEATHER_DATA, SET_LOADING} from '../actions/weather';

const initialState = {
  weatherData: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_DATA:
      return {
        ...state,
        weatherData: action.weatherData,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
  }
  return state;
};
