import React from 'react';
import { Avatar, Card, CardActionArea, CardContent, CardMedia, Typography, Box, IconButton, Badge } from '@mui/material';
import { ArticleCardProps } from '../../interfaces';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';


const ArticleCard: React.FC<ArticleCardProps & { editable?: boolean }> = ({ imageUrl, title, category, date, author, id, editable, isFeatured }) => {
  const navigate = useNavigate();

  const cardStyles = isFeatured
    ? { maxWidth: '100%', m: 2, boxShadow: 3 } // Add styles for featured article
    : { maxWidth: 345, m: 2 };

  const handleClick = () => {
    console.log("here" )
    navigate(`/article/${id}`);
  }
  return (
    <Card onClick={handleClick} sx={cardStyles}>
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
          <Typography variant="body2" color="text.secondary">
            {category}
          </Typography>
          {/* <Box display="flex" justifyContent="space-between" alignItems="center">
           
            <Typography variant="body2" color="text.secondary">
              {date}
            </Typography>
          </Box> */}

          {/* <Typography variant="body2" color="text.secondary">
            {author}
          </Typography> */}
          {editable && (
             <Box>
             <IconButton aria-label="edit" size="small" sx={{ ml: 1 }}>
               <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" invisible>
                 <EditIcon />
               </Badge>
             </IconButton>
             <IconButton aria-label="delete" size="small" sx={{ ml: 1 }}>
               <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" invisible>
                 <DeleteIcon />
               </Badge>
             </IconButton>
           </Box>
          )}

          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
            <Avatar sx={{ width: 24, height: 24, marginRight: '8px' }}>
              <PersonIcon />
            </Avatar>
            <Typography variant="body2">
              {author} - {date}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ArticleCard;