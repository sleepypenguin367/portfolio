
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';

import Work from './components/Work';
import projData from "./assets/proj.json";

projData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  return (
    <>
    <div className="container">
      <div className='container_left'>
        <div className='title'> 
      <h2>**My Name**</h2>
<h3>Welcome to my site! I'm a student studying UIUX with a computer science background. I'm passionate about UI design and working to become a UX Designer. Here are some of my works.</h3>
</div>
</div>
    <Works />
    <WorkSec1 />
    <WorkSec2 />
    <WorkSec3 />
    <WorkSec4 />
    
    </div>

    </>
  );
}

function Works() {

  return (
<div className="works">
{projData.map((item) => (
       <div className="itemWork">
       <Work title={item.title} description={item.description} image={item.image} web={item.web}></Work>
       </div>
      ))}
</div>
  );
}

function WorkSec1() {
  return (
<div className="container_left1">
  <div className="hori">
    <div className="left">
      <h4>Persona & Storyboard</h4>
      <h1>Created personas and storyborading based on interviews of users using gas station machine</h1>
      <a href="https://sleepypenguin367.github.io/personas-storyboard/"><Button>Go to Site</Button></a>
    </div>
    <div className="right">
<h5>Context</h5>
<h6>Many users face problems when adding gas to their cars in a gas station. The gas pumping machine user interface varies from the different gas stations, but use issues exist. </h6>
<h5>Tradeoff</h5>
<h6>I'm able to identify specific reasons causing different groups of users to have a frustrating experience. I created personas according to the two most distinguishable groups to best address the user experience. </h6>
    </div>
   

</div>
</div>
  );
}


function WorkSec2() {
  return (
    <div className="container_left2">
      <div className="hori">
        <div className="left">
          <h4>Development</h4>
          <h1>Created an application interface for a milk tea shop</h1>
          <a href="https://sleepypenguin367.github.io/development1300/"><Button>Go to Site</Button></a>
        </div>
        <div className="right">
    <h5>Context</h5>
    <h6>Many milk tea shops need the necessary filtering features that allow users to filter the drinks they want by ingredients. This troubles users who have allergies to certain ingredients.  </h6>
    <h5>Tradeoff</h5>
    <h6>By having necessary filter features built with react state, users can filter drinks as needed to increase efficiency and lower the chance of getting an unexpected allergy. </h6>
        </div>
       
    
    </div>
    </div>
      );
}
function WorkSec3() {
  return (
    <div className="container_left1">
      <div className="hori">
        <div className="left">
          <h4>Responsive Redesign</h4>
          <h1>Redesigned a website to let have better useability and responsiveness to different devices</h1>
          <a href="https://sleepypenguin367.github.io/responsive-redesign/"><Button>Go to Site</Button></a>
        </div>
        <div className="right">
    <h5>Context</h5>
    <h6>There were many websites that had poor design, which struggled users. In addition, these websites often only work on a specific screen size instead of on tablets and phones. I choose myvisajob.com as the website to redesign.  </h6>
    <h5>Tradeoff</h5>
    <h6>I redesign the whole website considering factors such as usability and learnability of the user experience with the website. In addition, the website is redesigned to be responsive to device sizes.  </h6>
        </div>
       
    
    </div>
    </div>
      );
}
function WorkSec4() {
  return (
    <div className="container_left2">
      <div className="hori">
        <div className="left">
          <h4>Iterative Design</h4>
          <h1>Follow the full process of designing and examing an interface</h1>
          <a href="https://indra9527.github.io/Iterative-Design/"><Button>Go to Site</Button></a>
        </div>
        <div className="right">
    <h5>Context</h5>
    <h6>It is interesting to see how an interface is designed through a complete process. To mock how the process works in an industrial world, we choose AeonCharge as the startup to design an interface.  </h6>
    <h5>Tradeoff</h5>
    <h6>We went through the full process of iteractive design, including sketching initial ideas and combining them into wireframes, creating an interactive high-fidelity mockup, collecting and incorporating feedback, and having test users try out on UserTesting.com.  </h6>
        </div>
       
    
    </div>
    </div>
      );
}

export default App;

