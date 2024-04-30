import { MY_ARTICLES_TEXT } from "../../constants/constantText";
import { MY_ARTICLES } from "../../graphQl/article/queries";
import ArticleCard from "../common/ArticleCard";
import { useQuery } from "@apollo/client";
import { Alert, CircularProgress, Container, Divider, Grid, Typography } from "@mui/material";

export default function MyArticlesListing() {
    const token = localStorage.getItem('token') || '';

    const { loading, error, data } = useQuery(MY_ARTICLES, {
        context: {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    });

    if (loading) return <CircularProgress />;
    if (error) return <Alert severity="error">Error loading posts: {error.message}</Alert>;

    const posts = data?.myPosts?.posts ?? [];

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
               {MY_ARTICLES_TEXT}
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
                editable={true} 
              />
            </Grid>
          ))}
          
            </Grid>
        </Container>



    );

}
