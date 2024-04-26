import Header from "../common/Header";
import ArticleCard from "../common/ArticleCard";
import { Box, Grid, Container, Typography } from '@mui/material';

const articles = [
    {
        imageUrl: '',
        title: 'The impact of technology on the workplace: How technology is changing', 
        category: 'Technology', 
        date:'09-05-24', 
        author: 'Tracey Wilson'
    },
    {
        imageUrl: '',
        title: 'The impact of technology on the workplace: How technology is changing', 
        category: 'Technology', 
        date:'09-05-24', 
        author: 'Tracey Wilson'
    },
    {
        imageUrl: '',
        title: 'The impact of technology on the workplace: How technology is changing', 
        category: 'Technology', 
        date:'09-05-24', 
        author: 'Tracey Wilson'
    },
    {
        imageUrl: '',
        title: 'The impact of technology on the workplace: How technology is changing', 
        category: 'Technology', 
        date:'09-05-24', 
        author: 'Tracey Wilson'
    },
    {
        imageUrl: '',
        title: 'The impact of technology on the workplace: How technology is changing', 
        category: 'Technology', 
        date:'09-05-24', 
        author: 'Tracey Wilson'
    },
    {
        imageUrl: '',
        title: 'The impact of technology on the workplace: How technology is changing', 
        category: 'Technology', 
        date:'09-05-24', 
        author: 'Tracey Wilson'
    },
    {
        imageUrl: '',
        title: 'The impact of technology on the workplace: How technology is changing', 
        category: 'Technology', 
        date:'09-05-24', 
        author: 'Tracey Wilson'
    },

];

export default function HomeScreen() {
  return (
      <Box sx={{ flexGrow: 1 }}>
        {/* <Header /> */}
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" sx={{ marginY: 4 }}>
            Top Stories
          </Typography>
          <Grid container spacing={4}>
            {articles.map((article, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ArticleCard {...article}/>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
  );
}
