import axios from 'axios';

export const GET_WEATHER_DATA = 'GET_WEATHER_DATA';
export const SET_LOADING = 'SET_LOADING';

export const getWeatherData = () => async dispatch => {
  dispatch({type: SET_LOADING, isLoading: true});
  const weatherData = await axios.get(
    'https://www.metaweather.com/api/location/1940345/',
  );

  dispatch({
    type: GET_WEATHER_DATA,
    weatherData: weatherData.data.consolidated_weather,
  });
  dispatch({type: SET_LOADING, isLoading: false});
};
