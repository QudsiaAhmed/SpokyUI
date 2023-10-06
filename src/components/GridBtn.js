// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import BookIcon from '@mui/icons-material/Book';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   color: theme.palette.text.secondary,
//   border: `2px solid #62D2E9`,
//   borderRadius: '40px', 
//   display: 'flex',
//   justifyContent: 'center', 
//   alignItems: 'center', 
//   width: '19rem',
//   height: '2rem', 
//   marginLeft: '20rem',
//   padding:'12px'
// }));

// export default function ColumnsGrid() {
//   return (
//     <Box
//       sx={{
//         flexGrow: 1,
//         marginTop: '6rem',
//         marginLeft: '4.5rem', 
//         // marginRight: '1rem',
//         display: 'flex',
//         justifyContent: 'center',
//       }}
//     >
//       <Grid container spacing={2} columns={16}>
//         <Grid item xs={4}>
//           <Item>
//             <BookIcon fontSize="large" style={{ marginRight: '8px',color:' #62D2E9' }} />
//             <Typography variant="body2" sx={{fontFamily:'Outfit',fontSize:'1.3rem',fontWeight:'400',color:'#454C50'}}>Upgrade Account</Typography>
//           </Item>
//         </Grid>
//         <Grid item xs={4}>
//           <Item>
//             <BookIcon fontSize="large" style={{ marginRight: '8px',color:' #62D2E9' }} />
//             <Typography variant="body2" sx={{fontFamily:'Outfit',fontSize:'1.3rem',fontWeight:'400',color:'#454C50'}}>Create Chatbot</Typography>
//           </Item>
//         </Grid>
//         <Grid item xs={4}>
//           <Item>
//             <BookIcon fontSize="large" style={{ marginRight: '8px',color:' #62D2E9' }} />
//             <Typography variant="body2" sx={{fontFamily:'Outfit',fontSize:'1.3rem',fontWeight:'400',color:'#454C50'}}>Chatbot Templates</Typography>
//           </Item>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }




import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles'; 
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BookIcon from '@mui/icons-material/Book';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent', 
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  border: `2px solid #62D2E9`,
  borderRadius: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '19rem',
  height: '2rem', 
  padding: '15px',
  marginLeft: '1rem', 
}));

export default function ColumnsGrid() {
  const theme = useTheme(); 

  return (
    <Box
      sx={{
        flexGrow: 1,
        marginTop: '6rem',
        marginLeft: '25rem',
        // marginRight: '4.5rem',
        display: 'flex',
        justifyContent: 'center',
        [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
          marginLeft: '1rem', 
        },
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              height: '100%',
              background: 'transparent', 
            }}
          >
            <BookIcon fontSize="large" style={{ marginRight: '8px', color: ' #62D2E9' }} />
            <Typography variant="body2" sx={{ fontFamily: 'Outfit', fontSize: '1.3rem', fontWeight: '400', color: '#454C50' }}>Upgrade Account</Typography>
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              height: '100%',
              color:'#454C50',
              fontFamily:'Outfit',
              background: 'transparent', 
              
            }}
          >
            <BookIcon fontSize="large" style={{ marginRight: '8px', color: ' #62D2E9' }} />
            <Typography variant="body2" sx={{ fontFamily: 'Outfit', fontSize: '1.3rem', fontWeight: '400', color: '#454C50' }}>Create Chatbot</Typography>
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              height: '100%',
              background: 'transparent', 
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

