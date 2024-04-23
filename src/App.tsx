import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import Header from './components/common/Header';
import CreateArticleForm from './components/articles/CreateArticleForm';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SignUp />
      {/* <Login /> */}
      {/* <Header /> */}
      {/* <CreateArticleForm /> */}
    </ThemeProvider>
  );
};

export default App;
