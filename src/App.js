import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Navigator, store, persistor, initialize} from './config';

const App = () => {
  useEffect(() => {
    initialize();
  }, []);

  return (
    <>
      <StatusBar backgroundColor={'#f7cc02'} animated />
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navigator />
          </PersistGate>
        </Provider>
      </SafeAreaView>
    </>
  );
};

export default App;
