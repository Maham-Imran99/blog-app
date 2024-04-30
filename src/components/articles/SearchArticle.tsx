import { useQuery } from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router-dom'
import { SEARCH_POSTS } from '../../graphQl/article/queries';
import { Grid, Card, CardMedia, CardContent, Typography, Container, Divider } from '@mui/material';

export const SearchArticle = () => {
    const {search} = useParams();
    const {data, loading, error} = useQuery(SEARCH_POSTS, {
        variables: {
            search: search,
            pagination: {
                page: 1,
                limit: 5
            }
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <Container> 
            <Typography>
                Search Results for {search}
            </Typography>

            <Divider sx={{ width: '100%'}} />

            
        <Grid container spacing={2}>
          {data.searchPosts.posts.map((post :any) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={post.imgUrl || '/default_image.jpg'}
                  alt={post.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        </Container>
      );
    };

