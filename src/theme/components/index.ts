import { Components } from '@mui/material/styles';

const components: Components = {
    // MuiTextField: {
    //     styleOverrides: {
    //         root: {
    //           backgroundColor:'red',
    //           borderRadius: '50px !important',
    //           fontSize:12
    //         },

    //     },
    // },
    MuiButton: {
        styleOverrides: {
            root: {
            },

        },
    },
    MuiAppBar: {
        styleOverrides: {
          root: {
           
            backgroundColor: '#fff', 
            color: '#000',
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
      // MuiButton: {
      //   styleOverrides: {
      //     root: {
      //       textTransform: 'none', // removing uppercase transformation
      //       margin: '0 12px', 
      //     },
      //   },
      // },
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
            // borderRadius: 14,
            
            // position: 'relative',
            // backgroundColor: '#f6f6f6', 
            // fontSize: 16,
            // width: 'auto',
            // padding: '10px 12px',
          },
        },
      },
};

export default components;
