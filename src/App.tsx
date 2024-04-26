import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { AuthContextProvider } from './contexts/auth';
import { Layout } from './components/layout';
import { routes } from './routes';

const App: React.FC = () => {
  const element = useRoutes(routes);
  return (
    <AuthContextProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
     <Layout>
      {element}
     </Layout> 
    </ThemeProvider>
    </AuthContextProvider> 
  );
};

export default App;
