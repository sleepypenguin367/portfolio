
import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import '../App.css';
import { Link } from 'react-router-dom';


export default function Navbar1() {
  

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

    <h1 className="h1-back"><Link to={'..'}>Back to Home</Link></h1>
    <span className="bigButton" id="bigb"></span>
      <Container maxWidth="xl" >
        <div className="innerbar">

          <div className="barcontainer">

          <span className='navButton'>
          <Button
                key='me'
                id='bu'
                pos="me"
                sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'roboto-black', fontSize:'15px' }}
                className="active"
                onClick={handleActive}
                >
                Original Website
                
              </Button></span>

        
        <span className='navButton'>
          <Button
                key='up'
                pos='up'
                id='bu'
                sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'roboto-black', fontSize:'15px' }}
                onClick={handleActive}
                >
                Usability Problems
                
              </Button></span>


              
              <span className='navButton'>
              <Button
              id='bu'
              pos='tf'
                key='tf'
                onClick={handleActive}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'roboto-black', fontSize:'15px' }}
               >
                Tests & Findings
              </Button>
              </span>

              <span className='navButton'>
          <Button
                key='vsg'
                id='bu'
                pos="vsg"
                sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'roboto-black', fontSize:'15px' }}
                onClick={handleActive}
                >
                
                Visual Style Guide
              </Button></span>

        
        <span className='navButton'>
          <Button
                key='lfp'
                pos='lfp'
                id='bu'
                sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'roboto-black', fontSize:'15px' }}
                onClick={handleActive}
                >
                Lo-fi Prototypes
                
              </Button></span>


              
              <span className='navButton'>
              <Button
              id='bu'
              pos='hfp'
                key='hfp'
                onClick={handleActive}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'roboto-black', fontSize:'15px' }}
               >
                Hi-fi Prototypes
              </Button>
              </span>
              <span className='navButton'>
              <Button
              id='bu'
              pos='rp'
                key='rp'
                onClick={handleActive}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'roboto-black', fontSize:'15px' }}
               >
                Responsive Page
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


