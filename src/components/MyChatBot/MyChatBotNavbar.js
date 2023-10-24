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

function ChatBotNavbar() {
  const isMobile = useMediaQuery('(max-width:600px)');//breakpoint here

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: 'transparent' }}
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
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#FF8C7D',
              textDecoration: 'none',
              marginLeft: isMobile ? '0' : '14rem',
              fontSize:'2rem',
            //   fontWeight:'800',
              color:'#FE705F',
              
            }}
          >
            My ChatBots
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

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton sx={{ p: 0 }}>
              <NotificationsIcon />
            </IconButton>
            <Box sx={{ mx: 1 }}>
            </Box>
            <IconButton sx={{ p: 0 }}>
              <AccountCircleIcon />
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
            >
              <MenuItem>Item 1</MenuItem>
              <MenuItem>Item 2</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ChatBotNavbar;
