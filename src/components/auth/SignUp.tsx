import React from 'react';
import { Container, Box, TextField, Button, Typography, Link } from '@mui/material';
import { CREATE_ACCOUNT, ALREADY_ACCOUNT, PASSWORD_MSG } from '../../constants/constantText';

const SignUp = () => {
  return (
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            marginTop: 8,
            // TODO: move to styledConstants -> flexColumnCenter
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid lightgray',
            padding: 3,
            gap: 4
          }}
        >
          <Box textAlign='center'>
          <Typography variant="h5" sx={{ mb: 3 }}>
          {CREATE_ACCOUNT}
          </Typography>
          <Link href="#" variant="body2" sx={{ mb: 2 }}>
            {ALREADY_ACCOUNT}
          </Link>
          </Box>
          <TextField
            variant="outlined"
            // margin="normal"
            required
            fullWidth
            id="email"
            label="What's your email?"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            // margin="normal"
            required
            fullWidth
            name="password"
            label="Create a password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Typography variant="body2" sx={{mb: 2 }}>
            {PASSWORD_MSG}
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            // color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            {CREATE_ACCOUNT}
          </Button>
        </Box>
      </Container>
  );
};

export default SignUp;