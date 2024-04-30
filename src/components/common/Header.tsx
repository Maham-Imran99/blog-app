import { AppBar, Toolbar, Typography, Button, Box, Avatar } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { Search, SearchIconWrapper, StyledInputBase } from '../../theme/components/headerStyles';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';
import { CREATE_ARTICLE_TEXT, HOME, LOGIN_TEXT, LOGOUT_TEXT, MY_ARTICLES_TEXT } from '../../constants/constantText';
import { CREATE_ARTICLE_ROUTE, HOME_ROUTE, LOGIN_ROUTE, MY_ARTICLES_ROUTE } from '../../constants/routes';

export default function Header() {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  const handleCreateArticleClick = () => {
    if (!isLoggedIn) {
      navigate(LOGIN_ROUTE);
    } else {
      navigate(CREATE_ARTICLE_ROUTE);
    }
  };

  const handleLogout = () => {
    logout();
    navigate(HOME_ROUTE);
  }

  return (
    <AppBar position="static" color="primary">
      
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>
            <Avatar alt="Logo" src={''} sx={{ marginRight: 2 }} />
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-around', maxWidth: 360 }}>
              <Typography variant="h6"  component={RouterLink} to={HOME_ROUTE} sx={{color: 'inherit' , textDecoration: 'none', marginRight: 2}}>
                {HOME}
              </Typography>

              {isLoggedIn ? (
                <Typography
                  component={RouterLink}
                  to={MY_ARTICLES_ROUTE}
                  variant="h6"
                  sx={{ marginRight: 2, textDecoration: 'none', color: 'inherit' }}
                >
                 {MY_ARTICLES_TEXT}
                </Typography>
              ) : (
                <Typography
                  component={RouterLink}
                  to={LOGIN_ROUTE}
                  variant="h6"
                  sx={{ marginRight: 2, textDecoration: 'none', color: 'inherit' }}
                >
                  {LOGIN_TEXT}
                </Typography>
              )}
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '100%' }}>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-around', maxWidth: 360 }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
              <Button onClick={handleCreateArticleClick}>{CREATE_ARTICLE_TEXT}</Button>

            </Box>
            {isLoggedIn && (
            <Button color="inherit" onClick={handleLogout}>
              {LOGOUT_TEXT}
            </Button>
          )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
