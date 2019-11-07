import React from 'react';
import {ThemeProvider} from 'styled-components';

import AppNavigator from './src/router';
import {theme} from './src/theme/globalStyle';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
