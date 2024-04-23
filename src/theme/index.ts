import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import components from './components';

const theme = createTheme({
  palette,
  typography: typography as any,
  components,
});

export default theme;
