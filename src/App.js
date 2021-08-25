import React from 'react';
import Home from './pages/home';
/* Theme provider é do styled components */
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import {Reset} from 'styled-reset';


function App() {
  return (   
  <ThemeProvider theme={theme}>
     <Reset />
     <Home />     
  </ThemeProvider>
  )
}
export default App;
