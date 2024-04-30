import React, { useState } from 'react';
import { Avatar, CardActionArea, CardContent, CardMedia, Typography, Box, IconButton, Badge, Paper } from '@mui/material';
import { ArticleCardProps } from '../../interfaces';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import DeleteDialog from './DeleteDialogBox';

const ArticleCard: React.FC<ArticleCardProps & { editable?: boolean }> = ({ imageUrl, title, category, date, author, id, editable }) => {
  const navigate = useNavigate();
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleDeleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setDialogOpen(true);
  };

  const closeDialog = () => setDialogOpen(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    navigate(`/article/${id}`);
  }

  const handleEditClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    navigate(`/update/${id}`);
  }

  return (
    <>
      <Paper variant='outlined' sx={{ maxWidth: 345, m: 2 }}>

        <CardActionArea onClick={handleClick}>

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

            {editable && (
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 1 }}>
                <IconButton aria-label="edit" size="small" onClick={handleEditClick} sx={{ ml: 1 }}>
                  <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" invisible>
                    <EditIcon />
                  </Badge>
                </IconButton>
                <IconButton aria-label="delete" size="small" sx={{ ml: 1 }}>
                  <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" invisible onClick={handleDeleteClick}>
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
        {isDialogOpen && <DeleteDialog articleId={id} onClose={closeDialog} open={true} />}
      </Paper>
    </>

  );
};

export default ArticleCard;