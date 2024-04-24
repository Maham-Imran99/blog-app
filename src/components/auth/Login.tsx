import { useState } from 'react';
import { Container, Box, TextField, Button, Checkbox, FormControlLabel, Typography, Link, Grid, CircularProgress, Alert, Divider, InputAdornment } from '@mui/material';
import { LoginUserInput } from '../../interfaces';
import { useAuth } from '../../contexts/auth';
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginShema } from '../../validationSchema';
import { loginUserInitialValues } from '../../constants/formInitialValues';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../graphQl/auth/mutations';
import { flexColumnCenter } from '../../constants/styleConstants';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { DONT_HAVE_ACCOUNT, FORGOT_PASS, LOGIN_TEXT, SIGNUP_TEXT } from '../../constants/constantText';


export const LoginComponent = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const { register, handleSubmit, formState: { errors } } = useForm<LoginUserInput>({
    resolver: yupResolver(LoginShema) as Resolver<LoginUserInput>,
    defaultValues: loginUserInitialValues
  });

  const { login } = useAuth();
  const [loginUser, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted(data) {
      login(data.signIn.token)
    }
  });

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error.message}</Alert>;


  const onSubmit: SubmitHandler<LoginUserInput> = async (data) => {
    try {
      const response = await loginUser({
        variables: {
          input: {
            username: data.username,
            password: data.password
          }
        }
      });
      alert('Login successful!');
    } catch (err) {
      alert('Login failed!');
    };
  };


  return (
    <Container component="main" maxWidth="md">
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          marginTop: 8,
          ...flexColumnCenter,
          padding: 3,
          //  gap:2
        }}
      >
        <Typography variant="h2">{LOGIN_TEXT}</Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email address or user name"
          autoComplete="email"
          autoFocus
          {...register("username")}
          error={!!errors.username}
          helperText={errors.username?.message}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Password"
          type={showPassword ? 'text' : 'password'}
          id="password"
          autoComplete="current-password"
          variant='outlined'
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Box sx={{ width: '100%', mt: 1 }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" style={{ textAlign: 'right' }}>
                {FORGOT_PASS}
              </Link>
            </Grid>
          </Grid>
        </Box>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {LOGIN_TEXT}
        </Button>

        <Divider sx={{ width: '100%', my: 2 }}></Divider>

        <Typography>
          {DONT_HAVE_ACCOUNT}
        </Typography>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {SIGNUP_TEXT}
        </Button>
      </Box>
    </Container>
  );
}
