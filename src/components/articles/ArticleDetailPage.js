import React from 'react';
import { Box, Typography, CardMedia, Container } from '@mui/material';
import { styled } from '@mui/system';

const ArticleScreen = () => {
const articleImage = ''; 
  return (
    <Container>
      <Box mt={4} mb={2}>
        <Typography variant="caption" display="block" gutterBottom>
          Technology
        </Typography>
        <Typography variant="h3" gutterBottom>
          The Impact Of Technology On The Workplace: How Technology Is Changing
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Tracey Wilson - August 20, 2022
        </Typography>
      </Box>
      <CardMedia
        component="img"
        image={articleImage}
        alt="Article Image"
        sx={{ height: 'auto', maxWidth: '100%' }}
      />
      <Box mt={2}>
        <Typography variant="body1">
          {/* Replace with your article text */}
          Here is the article content...
          {/* Repeat the content as needed */}
        </Typography>
      </Box>
    </Container>
  );
};

export default ArticleScreen;
