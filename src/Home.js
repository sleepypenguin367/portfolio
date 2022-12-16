
import './App.css';
import * as React from 'react';

import Navbar from './components/Navbar';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <Navbar />
    <div className="container">
    <section id="me" className="sec1">
    <div className='container_left'>
      <div className='title'>
        <h2>🙋‍♂️I'm Sleepy Penguin. Welcome to my site!</h2>
        <h3 className="h3-main">💻I'm a student studying UIUX with a computer science background.</h3>
        <h3 className="h3-main">🧑‍🎨I'm passionate about UI design and working to become a UX Designer. Here are some of my works.</h3>
        <h3 className="h3-main">👨‍💻Incoming intern at xxx.</h3>
        <h3 className="h3-main">🐻Student at Brown University.</h3>
      </div>
  
      {/* reference: https://stackoverflow.com/questions/18815157/how-to-overlay-image-with-color-in-css */}
      <img alt='memoji' src={process.env.PUBLIC_URL + "/" + "images/memoji.png"} className="memoji"></img>
      <span className='circle'></span>
      
   
    </div>
    </section >
    <section id="worksPage">
      <div className='div1'></div>
    </section>



    <section id="worksPage" className="workCon">
    <div className='workCon'><Works /></div>
    </section>



    <section id="contact">
      <div className='div2'></div>
    </section>

    <section id="contact" className="workCon2">
    <h2>Contact me</h2>
    
    <h2 className="h2-lc">Let's connect!</h2>
    <h3>xxxxx@brown.edu</h3>
    <div>
<InstagramIcon className="h2-icon"/>
<LinkedInIcon className="h2-icon"/>
<FacebookIcon className="h2-icon"/>
<TwitterIcon className="h2-icon"/>
    </div>
    </section>

    
    </div>
    </>
  );
}


function Works() {

  return (


<div className="works_header">

<h2>Here are something I had recently worked on.</h2>

<div className="works">
  
<div className="pro2">
<Link to={'redesign'}>

  <div className="pro222" onClick={() => {document.getElementById('me').scrollIntoView();}}>
{/* device mock: https://www.freepik.com/free-psd/digital-devices-screen-editable_16303836.htm#query=laptop%20tablet%20phone%20mockup&position=0&from_view=keyword */}
<img src={process.env.PUBLIC_URL + "/" + "images/redesign.png"} className="pro21"></img>

<div className="pro23"><h1 className="h1_p2">Redesigned a website to let have better useability and responsiveness to different devices</h1></div>
</div>
</Link>
<div className="pro22"><h2 className="h2_p2">Responsive Redesign</h2></div>


</div>
<div className="pro1">

<Link to={'iterative'}>
<div className="pro111" onClick={() => {document.getElementById('me').scrollIntoView();}}>
{/* device mock: https://www.freepik.com/free-psd/smartphone-screen-mockup-psd_32084765.htm#page=3&query=ipad%20mockup&position=49&from_view=search&track=sph */}
<img src={process.env.PUBLIC_URL + "/" + "images/devices7.png"} className="pro11"></img>
<div className="pro13"><h1 className="h1_p2">Follow the full process of designing and examining an interface</h1></div>
</div>
</Link>
<div className="pro12"><h2 className="h2_p1">Iterative Design</h2></div>

</div>
<div className="pro3">
<Link to={'milkteashop'}>
  <div className="pro333" onClick={() => {document.getElementById('me').scrollIntoView();}}>
{/* device mock: https://www.freepik.com/premium-psd/diagonal-composition-tablets-mockup_28451835.htm#query=ipad%20mockup&position=11&from_view=search&track=sph */}
<img src={process.env.PUBLIC_URL + "/" + "images/milkteamock.png"} className="pro31"></img>

<div className="pro33"><h1 className="h1_p2">Created a react application interface for a milk tea shop to apply sorting and filtering</h1></div>
</div>
</Link>
<div className="pro32"><h2 className="h2_p3">React Development</h2></div>


</div>
<div className="pro4">
<Link to={'persona'}>
<div className="pro444" onClick={() => {document.getElementById('me').scrollIntoView();}}>
<img src={process.env.PUBLIC_URL + "/" + "images/cover.png"} className="pro41"></img>
<div className="pro43"><h1 className="h1_p2">Created personas and storyborad based on interviews of users using gas station machine</h1></div>
</div>
</Link>
<div className="pro42"><h2 className="h2_p4">Persona & Storyboard</h2></div>

</div>

</div>
</div>
  );
}



    




function navmenu(){
  let cur = '';
  const sections=document.querySelectorAll("section");
  const lis=document.querySelectorAll("#bu");
  console.log(sections.length);
  sections.forEach( section => {
    const dis = section.offsetTop;
    if(window.scrollY >= dis) {
      cur = section.getAttribute("id");
    }
    if(window.scrollY < sections[0].offsetTop) {
      cur = "me";
    }
  });
  console.log(cur);
  lis.forEach( li => {
    console.log(li.getAttribute("key"));
    if(li.getAttribute('pos') == cur) {

      li.classList.add( "active");
      var rect = li.getBoundingClientRect();
      let bigB = document.querySelector("#bigb");
      const l = (rect.left+rect.right)/2 - 150;
      bigB.style.left = l+'px';
      console.log(bigB.style.left);
    } else {
      li.classList.remove( "active");
    }
  })
}

navmenu();
window.addEventListener("scroll", navmenu);

window.onload = function() {
  const lis=document.querySelectorAll("#bu");
  var rect = lis[0].getBoundingClientRect();
  let bigB = document.querySelector("#bigb");
  const l = (rect.left+rect.right)/2 - 150;
  bigB.style.left = l+'px';

}

 export default Home;

