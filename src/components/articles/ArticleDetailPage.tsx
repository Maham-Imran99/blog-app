import { Box, Typography, CardMedia, Container, CircularProgress, Alert } from '@mui/material';
import { UpdateArticleProps } from '../../interfaces';
import { useQuery } from '@apollo/client';
import { GET_ARTICLES } from '../../graphQl/article/queries';

export const ArticleDetailComponent = ({ articleId }: UpdateArticleProps): JSX.Element => {
  const { data, loading, error } = useQuery(GET_ARTICLES, {
    variables: {
      input: Number(articleId)
    }
  });

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{`Error loading article: ${error.message}`}</Alert>;
  if (!data || !data.getPost || !data.getPost.post) return <Alert severity="error">Article not found!</Alert>;

  const { post } = data.getPost;

  return (
    <Container>
      <Box mt={4} mb={2}>
        <Typography variant="caption" display="block" gutterBottom>
          {post.categories && post.categories.length > 0 ? post.categories[0].name : 'No Category'}
        </Typography>

        <Typography variant="h3" gutterBottom>
          {post.title}
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          {post.user ? `${post.user.name} - ` : ''}{new Date(post.time).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </Typography>
      </Box>

      <CardMedia
       component="img"
        image={post.imgUrl} 
        alt="Article Image"
        sx={{
          width: '100%', 
          height: 400, 
          objectFit: 'cover'
        }}
      />
     <Container maxWidth="md" sx={{ py: 4 }}> {/* Adjust padding top and bottom as needed */}
        <Typography variant="body1" component="div" sx={{
          whiteSpace: 'pre-line',
          textIndent: '2em',
          textAlign: 'justify',
          lineHeight: 1.6
        }}>
          {post.description}
        </Typography>
      </Container>

      {/* <Box sx={{ my: 4, mx: 2 }}>
        <Typography variant="body1" component="div" sx={{ whiteSpace: 'pre-line', textIndent: '2em', textAlign: 'justify', lineHeight: 1.6 }}>
        {post.description}
        </Typography>
      </Box> */}
    </Container>
  );
};