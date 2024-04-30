import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client'
import { Container, Box, TextField, Button, Typography, CircularProgress, Alert, Link } from '@mui/material';
import { CREATE_ACCOUNT, ALREADY_ACCOUNT, PASSWORD_MSG } from '../../constants/constantText';
import { flexColumnCenter } from '../../theme/styleConstants';
import { SIGNUP_USER } from '../../graphQl/auth/mutations';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SignUpUserInput } from '../../interfaces';
import { SignUpSchema } from '../../validationSchema';
import { SignUpUserInitialValues } from '../../constants/formInitialValues';
import { Resolver } from 'react-hook-form';
import { LOGIN_ROUTE } from '../../constants/routes';


export const SignUpComponent = (): JSX.Element => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpUserInput>({
    resolver: yupResolver(SignUpSchema) as Resolver<SignUpUserInput>,
    defaultValues: SignUpUserInitialValues
  });

  const [signUpUser, { loading, error }] = useMutation(SIGNUP_USER);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error.message}</Alert>;

  const onSubmit: SubmitHandler<SignUpUserInput> = async (data) => {
    try {
      const response = await signUpUser({
        variables: {
          input: data
        }
      });
      navigate(LOGIN_ROUTE)
    } catch (err) {
      alert('Signup failed!');
    };
  }

  return (
    <Container component="main" maxWidth="md" >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          marginTop: 8,
          ...flexColumnCenter,
          padding: 3,
          gap: 4
        }}
      >
        <Box textAlign='center'>
          <Typography variant="h2" gutterBottom>
            {CREATE_ACCOUNT}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <Link href="/login" underline="hover">
              {ALREADY_ACCOUNT}
            </Link>
          </Typography>
        </Box>
        {/* <Typography gutterBottom align='left'>
          What's your email?
        </Typography> */}
        <TextField
          variant="outlined"
          required
          fullWidth
          id="email"
          label="Enter your email address"
          autoComplete="email"
          autoFocus
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        {/* <Typography gutterBottom align="left">
          Create a password
        </Typography> */}
        <TextField
          variant="outlined"
          required
          fullWidth
          label="Enter your password"
          type="password"
          id="password"
          autoComplete="current-password"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Typography variant="body2" align="left" sx={{ mb: 2 }} >
          {PASSWORD_MSG}
        </Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {CREATE_ACCOUNT}
        </Button>
      </Box>
    </Container>
  );
};

