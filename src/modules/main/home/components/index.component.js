import React, {useEffect, useState} from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  StatusBar,
  Text,
  ScrollView,
  ImageBackground,
  RefreshControl,
} from 'react-native';
import {formatDistanceToNow} from 'date-fns';
const ptBr = require('date-fns/locale/pt-BR');

import {WeatherFailure} from './heigh-order-components';

const weatherItemsList = {
  Thunderstorm: require('../img/raining.gif'),
  Drizzle: require('../img/raining.gif'),
  Rain: require('../img/raining.gif'),
  Clear: require('../img/blue-sky.gif'),
  Clouds: require('../img/cloudy.gif'),
};

const renderActivityIndicator = () => (
  <View style={styles.activityIndicator}>
    <StatusBar hidden />
    <ActivityIndicator size={80} color={'#f7cc02'} />
  </View>
);

const IndexComponent = props => {
  const {weather, isLoaded, isLoading, failure} = props;
  const dateFromNow = isLoaded
    ? formatDistanceToNow(weather.date, {locale: ptBr})
    : '';

  const header = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTemp}>{parseInt(weather.main.temp)} °C</Text>
      <Text style={styles.headerLocation}>{weather.name}</Text>
    </View>
  );
  const content = () => (
    <View style={styles.contentContainer}>
      <Text style={styles.contentWeather}>
        {weather.weather[0].description}
      </Text>
      <Text style={styles.contentDate}>{dateFromNow}</Text>
    </View>
  );
  const footer = () => (
    <View style={styles.footerContainer}>
      <View style={styles.footerRow}>
        <Text style={styles.footerVariationTemp}>Máxima</Text>
        <View style={styles.footerRightItem}>
          <Text style={styles.footerTemp}>
            {parseInt(weather.main.temp_max)}°
          </Text>
          <Text style={styles.footerUmidity}>
            Umidade {weather.main.humidity}%
          </Text>
        </View>
      </View>
      <View style={styles.footerRow}>
        <Text style={styles.footerVariationTemp}>Mínima</Text>
        <View style={styles.footerRightItem}>
          <Text style={styles.footerTemp}>
            {parseInt(weather.main.temp_min)}°
          </Text>
          <Text style={styles.footerUmidity}>
            Umidade {weather.main.humidity}%
          </Text>
        </View>
      </View>
    </View>
  );

  useEffect(() => {
    props.getWeather();
  }, []);

  if (isLoading) return renderActivityIndicator();
  if (failure && !weather) return <WeatherFailure />;
  if (isLoaded)
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={() => props.getWeather()}
          />
        }
        contentContainerStyle={styles.container}>
        <StatusBar hidden />
        <ImageBackground
          source={weatherItemsList[weather.weather[0].main]}
          style={styles.imageBackgroundContainer}>
          {header()}
          {content()}
          {footer()}
        </ImageBackground>
      </ScrollView>
    );
  return null;
};

export default IndexComponent;

const styles = StyleSheet.create({
  footerContainer: {padding: 25},
  footerRow: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(225,225,225,0.5)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerVariationTemp: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  footerRightItem: {alignItems: 'flex-end'},
  footerTemp: {fontSize: 14, color: '#FFF', fontWeight: 'bold'},
  footerUmidity: {
    fontSize: 11,
    color: '#F3F3F3',
    fontWeight: '500',
  },
  contentContainer: {justifyContent: 'center', alignItems: 'center'},
  contentWeather: {
    fontSize: 60,
    color: '#FFF',
    fontWeight: '400',
    textTransform: 'capitalize',
  },
  contentDate: {
    fontSize: 16,
    color: '#F3F3F3',
    fontWeight: '400',
    textTransform: 'capitalize',
  },

  headerContainer: {paddingTop: 50, alignItems: 'center'},
  headerTemp: {fontSize: 70, color: '#FFF', fontWeight: '600'},
  headerLocation: {
    fontSize: 35,
    color: '#FFF',
    fontWeight: '100',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackgroundContainer: {flex: 1, justifyContent: 'space-between'},
  container: {flexGrow: 1},
});
