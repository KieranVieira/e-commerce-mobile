import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

import store from './src/redux';
import Navigator from './src/navigation';
import theme from './src/theme';

/**
 * Root of the app, everything is spawned from here, conveniently also where
 * we place our providers
 */
export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ActionSheetProvider>
          <View style={{ flex: 1 }}>
            <Navigator/>
          </View>
        </ActionSheetProvider>
      </ThemeProvider>
    </Provider>
  );
}
