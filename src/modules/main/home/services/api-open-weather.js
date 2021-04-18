import Config from 'react-native-config';

const BASE_URL = Config.OPEN_WEATHER_API_BASE_URL;
const weatherApiKey = Config.KEY_API_WEATHER;

export const getWeatherData = async location => {
  return await fetch(
    `${BASE_URL}/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${weatherApiKey}&lang=pt_br&units=metric`,
  );
};
