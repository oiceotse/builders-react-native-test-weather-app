import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {CommonActions} from '@react-navigation/native';

import buildersLogo from '../../.././../img/builders-logo.png';
import weatherBackground from '../img/Sun.png';

const IndexComponent = props => {
  useEffect(() => {
    props.setViewed();
  }, []);

  const resetAndNavigateToHome = () => {
    props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Home'}],
      }),
    );
  };

  const slide1Render = () => (
    <View source={weatherBackground} style={styles.slide1container}>
      <View style={{paddingTop: 50, alignItems: 'center'}}>
        <Text style={styles.slide1Title}>React Native</Text>
        <Text style={styles.slide1Title}>Teste Builders</Text>
      </View>
      <View style={{paddingBottom: 40}}>
        <Image source={buildersLogo} style={styles.logo} />
      </View>
    </View>
  );

  const slide2Render = () => (
    <View style={styles.slide2container}>
      <View style={styles.slide2TitleContainer}>
        <Text style={styles.slide2Title}>Meu clima</Text>
      </View>
      <View style={styles.iniciarContainer}>
        <TouchableOpacity
          onPress={() => resetAndNavigateToHome()}
          style={styles.iniciar}>
          <Text style={styles.iniciarTitle}>INICIAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ImageBackground source={weatherBackground} style={{flex: 1}}>
      <Swiper loop={false} showsButtons={false} style={styles.wrapper}>
        {slide1Render()}
        {slide2Render()}
      </Swiper>
    </ImageBackground>
  );
};
export default IndexComponent;

const styles = StyleSheet.create({
  logo: {resizeMode: 'contain', width: 180},
  slide1Title: {
    fontSize: 35,
    color: '#FFF',
    fontWeight: 'bold',
  },
  slide1container: {
    flex: 1,
    padding: 20,

    justifyContent: 'space-between',
    alignItems: 'center',
  },
  slide2container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  slide2TitleContainer: {
    paddingTop: 50,
  },
  slide2Title: {
    fontSize: 50,
    color: '#F3F3F3',
    fontWeight: '700',
    marginBottom: 0,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  iniciar: {
    width: 70,
    height: 70,
    backgroundColor: '#7ac2c8',
    justifyContent: 'center',
    paddingVertical: 5,
    elevation: 10,
    borderRadius: 250,
  },
  iniciarTitle: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iniciarContainer: {
    paddingBottom: 40,
  },
});
