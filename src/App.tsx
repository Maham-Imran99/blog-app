import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import {SignUpComponent} from './components/auth/SignUp';
// import {LoginComponent} from './components/auth/Login';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SignUpComponent />
      {/* <LoginComponent /> */}
    </ThemeProvider>
  );
};

export default App;
