import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const WeatherFailure = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Falha ao carregar informações do tempo</Text>
      <Button
        onPress={() => props.getWeather()}
        color={'#f7cc02'}
        title={'Tentar novamente'}
      />
    </View>
  );
};

export default WeatherFailure;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#A9A9A9',
  },
});
