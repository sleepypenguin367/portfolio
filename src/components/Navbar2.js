
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import '../App.css';




export default function Navbar2() {
  

  const handleActive = event => {
    const lis=document.querySelectorAll("#bu");
    lis.forEach( li => {
      if (li.classList.contains("active")) {
        li.classList.remove( "active");
      }
    });
    event.target.classList.add("active");
    var rect = event.target.getBoundingClientRect();
    
    let bigB = document.querySelector("#bigb");


    const l = (rect.left+rect.right)/2 - 150;
    bigB.style.left = l+'px';
    
    document.getElementById(event.target.getAttribute('pos')).scrollIntoView();
    
  }

  return (
    <div className="navbar1">
  {/* reference: https://mui.com/material-ui/react-app-bar/#ResponsiveAppBar.js */}
    <div className="navbar">
    <h1 className="h1-back"><a href="..">Back to Home</a></h1>
    <span className="bigButton" id="bigb"></span>
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
            Iterative Design
          </Typography>

          <div className="barcontainer">


          <span className='navButton'>
          <Button
                key='me'
                id='bu'
                pos="me"
                sx={{ my: 2, color: 'white', display: 'block', width: '100px', fontFamily: 'roboto-black', fontSize:'20px' }}
                className="active"
                onClick={handleActive}
                >
                Overview
                
              </Button></span>
            

        
        <span className='navButton'>
          <Button
                key='ske'
                pos='ske'
                id='bu'
                sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'roboto-black', fontSize:'20px' }}
                onClick={handleActive}
                >
                Sketches  
                
              </Button></span>

            
              
              <span className='navButton'>
              <Button
              id='bu'
              pos='wf'
                key='wf'
                onClick={handleActive}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'roboto-black', fontSize:'20px' }}
               >
                Wireframe
              </Button>
              </span>
                   
              <span className='navButton'>
              <Button
              id='bu'
              pos='hfm'
                key='hfm'
                onClick={handleActive}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'roboto-black', fontSize:'20px' }}
               >
               Hi-Fi Mockup
              </Button>
              </span>
              <span className='navButton'>
              <Button
              id='bu'
              pos='ut'
                key='ut'
                onClick={handleActive}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'roboto-black', fontSize:'20px' }}
               >
               User Testing
              </Button>
              </span>
              
        
              </div>
   
 
        </div>
      </Container>
      
    </div>
      {/* reference: https://www.youtube.com/watch?v=PvCeQU6QoGY
   Following piece of code is borrowed from https://codepen.io/lenymo/pen/pJzWVy with gooey effect */}
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="filter-svg">
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
      <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
    </filter>
  </defs>
</svg>
</div>
  );
}


