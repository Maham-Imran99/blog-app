import { Components } from '@mui/material/styles';

const components: Components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '50px !important',
        backgroundColor: 'black',
        color: 'white',
        '&:hover': {
          backgroundColor: 'darkgrey',
        },
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        color: 'white'
      },
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: {
        //Toolbar styles here
      },
    },
  },

  MuiIconButton: {
    styleOverrides: {
      root: {
        // Define your IconButton styles here
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        borderRadius: '50px !important',
      },
      input: {
        fontSize: 18,
      },
    },
  },
};

export default components;
