import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Select, 
  MenuItem, 
  InputLabel, 
  FormControl, 
  Divider,
  TextareaAutosize, 
  Box
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../theme/index';



export default function CreateArticleForm() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <Typography variant="h4" component="h1" gutterBottom>
          Create New Article
        </Typography>

        <Divider sx={{ width: '100%', my: 2 }}></Divider>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            required
            fullWidth
            id="title"
            label="Give it a title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              value={category}
              label="Category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'tech'}>Technology</MenuItem>
              <MenuItem value={'life'}>Lifestyle</MenuItem>
              {/* Add other categories as needed */}
            </Select>
          </FormControl>
          <TextField
            required
            fullWidth
            id="content"
            label="Write something about it"
            multiline
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            margin="normal"
          />
          <Button
            variant="contained"
            component="label"
            sx={{ mt: 2, mb: 2 }}
          >
            Browse
            <input
              type="file"
              hidden
              accept="image/jpeg, image/png"
              onChange={handleFileChange}
            />
          </Button>
          <Typography variant="body2">
            Supports: JPG, JPEG2000, PNG
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Publish Article
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
