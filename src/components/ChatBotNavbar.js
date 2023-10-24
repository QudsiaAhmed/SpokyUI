import * as React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout'; // Import the Logout icon
import useMediaQuery from '@mui/material/useMediaQuery';

function Navbar() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [isAccountBoxOpen, setIsAccountBoxOpen] = React.useState(false);

  const handleAccountIconClick = () => {
    setIsAccountBoxOpen(!isAccountBoxOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: 'transparent', width: 'calc(100vw - 19rem)', marginTop: '1.1rem' }}
      style={{ boxShadow: 'none' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: isMobile ? 0 : 2,
              fontFamily: 'Outfit',
              fontWeight: 'bold',
              letterSpacing: '.2rem',
              color: '#FF8C7D',
              fontSize: '34px',
              textDecoration: 'none',
              marginLeft: isMobile ? '0' : '5rem',
            }}
          >
            Create Chatbot
          </Typography>

          {isMobile && (
            <IconButton
              size="large"
              aria-label="menu"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          )}

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', pr: 10 }}>
            <IconButton sx={{ p: 0 }}>
              <NotificationsIcon />
            </IconButton>
            <Box sx={{ mx: 1 }}>
            </Box>
            <IconButton sx={{ p: 0 }} onClick={handleAccountIconClick}>
              <AccountCircleIcon />
            </IconButton>
            {isAccountBoxOpen && (
              <Box
                sx={{
                  position: 'absolute',
                  top: '80%',
                  right: '6%', 
                  backgroundColor: 'white',
                  border: '1px solid #ccc',
                  borderRadius: '10px',
                  zIndex: 1,
                  color: 'black',
                }}
              >
                <MenuItem>
                  <Link to="/signin" style={{ textDecoration: 'none',color:'black',padding:'10px' }}>
                    <LogoutIcon /> Logout
                  </Link>
                </MenuItem>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
