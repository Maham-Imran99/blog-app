import {useState} from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import {
  Container,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Divider,
  Box,
  CircularProgress,
  Alert
} from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CreateArticleSchema } from '../../../validationSchema';
import { CreateArticleFormInitialValues } from '../../../constants/formInitialValues';
import { Resolver } from 'react-hook-form';
import { CreateArticleInput } from '../../../interfaces/index';
import { CREATE_ARTICLE } from '../../../graphQl/article/mutations';
import { MY_ARTICLES_ROUTE } from '../../../constants/routes';

export const CreateArticleForm = (): JSX.Element => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<CreateArticleInput>({
    resolver: yupResolver(CreateArticleSchema) as Resolver<CreateArticleInput>,
    defaultValues: CreateArticleFormInitialValues
  });

  const [image, setImage] = useState<File | null> (null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setImage(file);
  }

  const [createArticle, {loading, error}] = useMutation(CREATE_ARTICLE);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error.message}</Alert>;

  const onSubmit: SubmitHandler<CreateArticleInput> = async (data) => {
    console.log("Article data", data)
    try{
      const response = await createArticle({
        variables:{
          input: data
        }
      });
      navigate(MY_ARTICLES_ROUTE)
    }catch(err){
      alert('create article failed')
    }
  }

  return (
    <Container component="main" maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Create New Article
      </Typography>

      <Divider sx={{ width: '100%', my: 2 }}></Divider>

      <Box component="form" onSubmit={handleSubmit(onSubmit)}  sx={{ mt: 1 }}>
        <TextField
        {...register('title')}
          required
          fullWidth
          id="title"
          label="Give it a title"
          margin="normal"
          error={!!errors.title} 
        helperText={errors.title?.message}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            id="category"
            label="Category"
          
            // {...register('categoryIds')}
            // value={categoryIds || ''}
            // error={!!errors.categoryIds} 
            
           
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'tech'}>Technology</MenuItem>
            <MenuItem value={'life'}>Lifestyle</MenuItem>
            {/* Add other categories as needed */}
          </Select>
        </FormControl>
        <TextField
          required
          fullWidth
          id="content"
          label="Write something about it"
          multiline
          rows={4}
          margin="normal"
          {...register('description')}
          error={!!errors.description} // Show error if there's an error for 'content'
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
      </Box>
    </Container>
  );
}




// const [title, setTitle] = useState('');
  // const [category, setCategory] = useState('');
  // const [content, setContent] = useState('');
  // const [image, setImage] = useState(null);

  // const handleFileChange = (event) => {
  //   setImage(event.target.files[0]);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };
