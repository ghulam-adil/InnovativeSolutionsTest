import React, {useEffect} from 'react';
import {View, FlatList, Text, Image, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {generalImages} from '../../assets/images';
import FloatingButton from '../../components/buttons/FloatingButton';

import * as weatherActions from '../../redux/actions/weather';
import {vh, vw} from '../../units';
import {appTheme} from '../../utils';
import styles from './styles';

const WeatherScreen = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector(state => state.weather.weatherData);
  const isLoading = useSelector(state => state.weather.isLoading);

  useEffect(() => {
    dispatch(weatherActions.getWeatherData());
  }, []);

  const renderWeatherItem = ({item, index}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: vh * 2,
        }}>
        <Text style={{width: '20%'}}>{item.weather_state_name}</Text>
        <Text>{item.the_temp.toFixed(2)}</Text>
        <Image
          source={{
            uri: `https://www.metaweather.com/static/img/weather/png/${item.weather_state_abbr}.png`,
          }}
          style={{height: vh * 8, width: vh * 8}}
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator color={appTheme.blue} size={vh * 7} />
        </View>
      ) : (
        <View style={{flex: 1}}>
          <FlatList data={weatherData} renderItem={renderWeatherItem} />
          <View style={styles.floatingButtonContainer}>
            <FloatingButton
              onPress={() => dispatch(weatherActions.getWeatherData())}>
              <Image source={generalImages.refresh} style={styles.buttonIcon} />
            </FloatingButton>
          </View>
        </View>
      )}
    </View>
  );
};

export default WeatherScreen;
