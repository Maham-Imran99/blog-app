import { useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import {
  Container,
  Typography,
  TextField,
  Button,
  Divider,
  Box,
  CircularProgress,
  Alert,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { UpdateArticleSchema } from '../../../validationSchema';
import { UpdateArticleFormInitialValues } from '../../../constants/formInitialValues';
import { Resolver } from 'react-hook-form';
import { UpdateArticleInput, UpdateArticleProps } from '../../../interfaces/index';
import { MY_ARTICLES_ROUTE } from '../../../constants/routes';
import { GET_ARTICLES } from "../../../graphQl/article/queries";
import { EDIT_ARTICLE } from "../../../graphQl/article/mutations";
import { UPDATE_ARTICLE_TEXT } from "../../../constants/constantText";

export const EditArticleForm = ({ articleId}: UpdateArticleProps): JSX.Element => {
  const token = localStorage.getItem('token') || '';
  const navigate = useNavigate();

  const { data: articleData, loading: queryLoading, error: queryError } = useQuery(GET_ARTICLES, {
    variables: {
      input: Number(articleId)
    }
  });

  const [editArticle, { loading: mutationLoading, error: mutationError }] = useMutation(EDIT_ARTICLE, {
    context: {
      headers: {
        Authorization: `Bearer ${token}`
      },
    },
    onCompleted: () => {
      alert('Article updated successfully');
      navigate(MY_ARTICLES_ROUTE);
    },
  });

  const methods = useForm<UpdateArticleInput>({
    mode: 'all',
    resolver: yupResolver(UpdateArticleSchema) as Resolver<UpdateArticleInput>,
    defaultValues: UpdateArticleFormInitialValues

  });

  const { handleSubmit, register, formState: { errors }} = methods;

  const [image, setImage] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setImage(file);
  }

  const onSubmit: SubmitHandler<UpdateArticleInput> = async (data) => {
    try {
      const response = await editArticle({
        variables: {
          id: Number(articleId),
          input: data
        }
      });
      alert('success')

      navigate(MY_ARTICLES_ROUTE)
    } catch (err) {
      console.error('Update article failed', err);
      alert('Update article failed');
    }
  }

  if (queryLoading || mutationLoading) return <CircularProgress />;
  if (queryError) return <Alert severity="error">Error loading the article: {queryError.message}</Alert>;
  if (mutationError) return <Alert severity="error">Error updating the article: {mutationError.message}</Alert>;

  return (
    <Container component="main" maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
       {UPDATE_ARTICLE_TEXT}
      </Typography>

      <Divider sx={{ width: '100%', my: 2 }}></Divider>

      <Box sx={{ mt: 1 }}>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
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
