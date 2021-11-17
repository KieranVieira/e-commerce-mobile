import React from 'react';
import { render as testingRender } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';

import theme from '../theme';

const render = (component: JSX.Element) => {
  return testingRender(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  )
}

export { 
  render
}