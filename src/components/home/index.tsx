import React from 'react';
import ArticleCard from "../common/ArticleCard";
import { Box, Grid, Container, Typography, Divider, CircularProgress, Alert } from '@mui/material';
import { TOP_STORIES } from "../../constants/constantText";
import { useQuery } from "@apollo/client";
import { ALL_POSTS } from "../../graphQl/article/queries";

export default function HomeScreen() {
  const { loading, error, data } = useQuery(ALL_POSTS);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">Error loading posts: {error.message}</Alert>;

  const posts = data?.allPosts?.posts ?? [];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="lg">

        <Typography variant="h2" sx={{ marginY: 4 }}>
          {TOP_STORIES}
        </Typography>

        <Divider sx={{ width: '100%'}} />

        <Grid container spacing={4}>
          {posts.map((post:any) => (

            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <ArticleCard
                id={post.id}
                title={post.title}
                imageUrl={post.imgUrl}
                category={post.categories.map((category: { name: string; }) => category.name).join(', ')}
                date={new Date(post.time).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
                author={post.user.name}
                editable={false} 
              />
            </Grid>

          ))}
        </Grid>
        
      </Container>
    </Box>
  );
}
