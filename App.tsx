import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import Navigator from './src/navigation';
import theme from './src/theme';

/**
 * Root of the app, everything is spawned from here, conveniently also where
 * we place our providers
 */
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1 }}>
        <Navigator/>
      </View>
    </ThemeProvider>
  );
}
