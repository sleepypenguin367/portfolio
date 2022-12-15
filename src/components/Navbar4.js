
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import '../App.css';




export default function Navbar4() {
  
  return (
    <div className="navbar1">
  {/* reference: https://mui.com/material-ui/react-app-bar/#ResponsiveAppBar.js */}
    <div className="navbar">
    <h1 className="h1-back"><a href="..">Back to Home</a></h1>
      <Container maxWidth="xl" >
        <div className="innerbar">
        
          <Typography
            flexGrow={1}
            marginTop={2}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'roboto-black', 
              fontSize:'20px',
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            React Development
          </Typography>

          <div className="barcontainer">



       
        
              </div>
   
 
        </div>
      </Container>
      
    </div>
    

</div>
  );
}


