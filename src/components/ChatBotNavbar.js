import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import useMediaQuery from '@mui/material/useMediaQuery';

function Navbar() {
  const isMobile = useMediaQuery('(max-width:600px)'); 

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: 'transparent' }}
      style={{ boxShadow: 'none' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: isMobile ? 0 : 2,
                fontFamily: 'Outfit',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#FF8C7D',
                textDecoration: 'none',
                marginLeft: isMobile ? '0' : '1rem',
              }}
            >
              Create Chatbot
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'normal', fontSize: '1rem', marginTop: '0.5rem',color:'#00000080',marginLeft:'13rem' }}>
              Follow the steps below to build your own customize chatbot
            </Typography>
          </div>

          {isMobile && (
            <IconButton
              size="large"
              aria-label="menu"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          )}

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton sx={{ p: 0 }}>
              <NotificationsIcon />
            </IconButton>
            <Box sx={{ mx: 1 }}>
            </Box>
            <IconButton sx={{ p: 0 }}>
              <AccountCircleIcon />
            </IconButton>
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
