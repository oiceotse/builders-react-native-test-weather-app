import Geolocation from 'react-native-geolocation-service';
import {PermissionsAndroid, Platform} from 'react-native';

export const getCurrentLocation = async () => {
  return new Promise(async (resolve, reject) => {
    if (Platform.OS !== 'android') {
      Geolocation.requestAuthorization();
    } else {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          position => {
            let origin = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            };
            resolve(origin);
          },
          () => {},
          {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
        );
      } else {
        reject('Permissão de geolocalização não concedida');
        Defaults.modal.current.renderModel(modalOptions);
      }
    }
  });
};
