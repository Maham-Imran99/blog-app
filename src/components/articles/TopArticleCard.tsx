import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box, Chip, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { ArticleCardProps } from '../../interfaces';

const TopArticleCard : React.FC<ArticleCardProps> = ({ imageUrl, title, category, date, author, id }) => {
  const article = {
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFTa1O3y47fZJUec61ZQLoBQt1kOtfDxpXxmjvGSeTAg&s',
    title: 'The Impact Of Technology On The Workplace: How Technology Is Changing',
    category: 'Technology',
    author: 'Tracey Wilson',
    date: 'April 29, 2024',
  };

  return (
    <Card sx={{ maxWidth: '100%', position: 'relative',  m: 2, boxShadow: 3  }}>
      <CardMedia
        component="img"
        image={article.imageUrl}
        alt={article.title}
        sx={{ height: '100%', objectFit: 'cover' }}
      />
      <CardContent sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        color: 'white',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '16px'
      }}>
        <Chip label={article.category} size="small" sx={{ mb: 1, color: 'white', borderColor: 'white' }} variant="outlined" />
        <Typography variant="h5" component="div" gutterBottom>
          {article.title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar sx={{ width: 24, height: 24, marginRight: '8px', bgcolor: 'white' }}>
            <PersonIcon color="action" />
          </Avatar>
          <Typography variant="caption">
            {article.author} - {article.date}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TopArticleCard;