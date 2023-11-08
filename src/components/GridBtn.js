import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BookIcon from '@mui/icons-material/Book';

export default function ColumnsGrid() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        flexGrow: 1,
        marginTop: '0',
        display: 'flex',
        justifyContent: 'center',
        [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
          marginLeft: '0',
        },
      }}
    >
      <Grid container spacing={2} sx={{ alignItems: 'center' }}>
        <Grid item xs={12} sm={6} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Button
            sx={{
              background: 'transparent',
              borderRadius: '40px',
              border: '1px solid #62D2E9',
              padding: '20px',
              width: '97%', 
              color:'#454C50',
              fontFamily:'Outfit',
              fontSize:'20px',
              fontWeight:'400'
            }}
          >
            <BookIcon fontSize="large" style={{ marginRight: '8px', color: ' #62D2E9' }} />
            <Typography variant="body2" sx={{ fontFamily: 'Outfit', fontSize: '1.3rem', fontWeight: '400', color: '#454C50' }}>Upgrade Account</Typography>
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Button
            sx={{
              background: 'transparent',
              borderRadius: '40px',
              border: '1px solid #62D2E9',
              padding: '20px',
              width: '97%', 
              color:'#454C50',
              fontFamily:'Outfit',
              fontSize:'20px',
              fontWeight:'400'
            }}
          >
            <BookIcon fontSize="large" style={{ marginRight: '8px', color: ' #62D2E9' }} />
            <Typography variant="body2" sx={{ fontFamily: 'Outfit', fontSize: '1.3rem', fontWeight: '400', color: '#454C50' }}>Create Chatbot</Typography>
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Button
            sx={{
              background: 'transparent',
              borderRadius: '40px',
              border: '1px solid #62D2E9',
              padding: '20px',
              width: '97%', 
              color:'#454C50',
              fontFamily:'Outfit',
              fontSize:'20px',
              fontWeight:'400',
            }}
          >
            <BookIcon fontSize="large" style={{ marginRight: '8px', color: ' #62D2E9' }} />
            <Typography variant="body2" sx={{ fontFamily: 'Outfit', fontSize: '1.3rem', fontWeight: '400', color: '#454C50' }}>Chatbot Templates</Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
