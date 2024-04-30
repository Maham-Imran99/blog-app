import { useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import {
  Container,
  Typography,
  TextField,
  Button,
  Divider,
  Box,
  CircularProgress,
  Alert,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { CreateArticleSchema } from '../../../validationSchema';
import { CreateArticleFormInitialValues } from '../../../constants/formInitialValues';
import { Resolver } from 'react-hook-form';
import { CreateArticleInput } from '../../../interfaces/index';
import { CREATE_ARTICLE } from '../../../graphQl/article/mutations';
import { MY_ARTICLES_ROUTE } from '../../../constants/routes';

export const CreateArticleForm = (): JSX.Element => {
  const token = localStorage.getItem('token') || '';
  const navigate = useNavigate();

  const methods = useForm<CreateArticleInput>({
    mode: 'all',
    resolver: yupResolver(CreateArticleSchema) as Resolver<CreateArticleInput>,
    defaultValues: CreateArticleFormInitialValues

  });
  const { handleSubmit, register, formState: {errors} ,watch} = methods;
  const [image, setImage] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setImage(file);
  }

  const [createArticle, { loading, error, data }] = useMutation(CREATE_ARTICLE, {
   
    context: {
      headers: {
          Authorization: `Bearer ${token}`
      },
      onCompleted(){
      },
  }
  });

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error.message}</Alert>;

  const onSubmit: SubmitHandler<CreateArticleInput> = async (data) => {

    try {
      const response = await createArticle({
        variables: {
          input: data,
          image: image
        }
      });
      alert('success')

      navigate(MY_ARTICLES_ROUTE)
    } catch (err) {
      console.error('Create article failed', err);
      alert('Create article failed');
    }
  }

  return (
    <Container component="main" maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Create New Article
      </Typography>

      <Divider sx={{ width: '100%', my: 2 }}></Divider>

      <Box   sx={{ mt: 1 }}>

        <FormProvider {...methods}>
          <form  onSubmit={handleSubmit(onSubmit)}>
          <TextField
          {...register('title')}
          fullWidth
          id="title"
          label="Give it a title"
          margin="normal"
          error={!!errors.title}
          helperText={errors.title?.message}
        />

          <InputLabel id="category-label">Category</InputLabel>
          <Select fullWidth
            labelId="category-label"
            {...register('categoryIds')}
            error={!!errors.categoryIds}
          >
            <MenuItem value={1}>Technology</MenuItem>
            <MenuItem value={2}>Lifestyle</MenuItem>
          </Select>

        <TextField
    
          fullWidth
          id="description"
          label="Write something about it"
          multiline
          rows={4}
          margin="normal"
          {...register('description')}
          error={!!errors.description}
          helperText={errors.description?.message}
        />
        <Button
          variant="contained"
          component="label"
          sx={{ mt: 2, mb: 2 }}
        >
          Browse
          <input
            type="file"
            hidden
            accept="image/jpeg, image/png"
            onChange={handleFileChange}

          />
        </Button>

        {image && (
          <Typography variant="body2" sx={{ mt: 1 }}>
            {image.name}
          </Typography>
        )}

        <Typography variant="body2">
          Supports: JPG, JPEG2000, PNG
        </Typography>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Publish Article
        </Button>
          </form>
        </FormProvider>
        
      </Box>
    </Container>
  );
}









/**
 * 
 *  {/* <FormControl fullWidth margin="normal">
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            {...register('categoryIds')}
            error={!!errors.categoryIds}
          >
            <MenuItem value="Technology">Technology</MenuItem>
            <MenuItem value="Lifestyle">Lifestyle</MenuItem>
          </Select>
        </FormControl>
 */