import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import Navigation from './src/navigation';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import { DrawerActions } from '@react-navigation/native';
import { lightTheme, darkTheme } from './src/theme';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <GluestackUIProvider config={config}>
            <Navigation />
          </GluestackUIProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
