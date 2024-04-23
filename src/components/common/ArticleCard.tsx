// ArticleCard.tsx
import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Box } from '@mui/material';

interface ArticleCardProps {
  imageUrl: string;
  title: string;
  category: string;
  date: string;
  author: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ imageUrl, title, category, date, author }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body2" color="text.secondary">
              {category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {date}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {author}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ArticleCard;
