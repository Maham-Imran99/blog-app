import { Components } from '@mui/material/styles';

const components: Components = {
    MuiButton: {
        styleOverrides: {
            root: {
              borderRadius: '50px !important',
            },
        },
    },
    MuiAppBar: {
        styleOverrides: {
          root: {
           
            // backgroundColor: '#fff', 
            // color: '#000',
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
              fontSize:18,
          },
        },
      },
};

export default components;
