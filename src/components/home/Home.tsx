import ArticleCard from "../common/ArticleCard";
import { Box, Grid, Container, Typography, Divider } from '@mui/material';
import { articles } from "../../constants";
import { TOP_STORIES } from "../../constants/constantText";


export default function HomeScreen() {
  const featureArticle = articles[0];
  const remainingArticles = articles.slice(1);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="lg">
        <Typography variant="h2"  sx={{ marginY: 4 }}>
         {TOP_STORIES}
        </Typography>

        <Divider sx={{ width: '100%'}}></Divider>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <ArticleCard {...featureArticle} id={featureArticle.id} isFeatured/>
          </Grid>

          {remainingArticles.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} key={article.id}>
              <ArticleCard isFeatured={false} {...article} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
