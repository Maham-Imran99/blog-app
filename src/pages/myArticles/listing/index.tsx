import {FC} from "react";
import { Container, Grid, Typography } from '@mui/material';
import ArticleCard from "../../../components/common/ArticleCard";

const MyArticlesScreen:FC = () => {
    const articles: any[] = [
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
    ]
    return (
    
        <Container>
          <Typography variant="h4" gutterBottom>
            My Articles
          </Typography>
          <Grid container spacing={4}>
            {articles.map((article, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ArticleCard {...article} editable={true}/>
              </Grid>
            ))}
          </Grid>
        </Container>
     
    );
  };
  
  export default MyArticlesScreen;
  