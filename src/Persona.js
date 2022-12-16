
import './App.css';
import * as React from 'react';

import Navbar3 from './components/Navbar3';

export default function Persona() {
  return (
    <>
    
    <Navbar3 />
    <div className="container">
    <section id="me" className="workCon2">
    <div className='container_left'>
    <div className='r-title'>
        <h2>Personas & Storyboarding</h2>
      </div>
    </div>    
    <div className="rr-1">
          <div>
            <div class="image-container"> <img src={process.env.PUBLIC_URL + "/" + "images/sketch.png"} alt="Sketch" width="100%" height="100%" /></div>
          </div>
          <div className="me-div">
            <h2 className="me-title">Sketch and Description</h2>
            <h3 className="me-des">This interface is a gasoline-pumping machine. The purpose is to let users fill in gas themselves. The button is for making choices from the screen. The three large buttons below are for choosing the fuel type. The handle is for actually filling the gas.</h3>
          </div>
    </div>
    </section >

    <section>
      <div className='div1'></div>
    </section>

    <section id="io" className="workCon">
    <h2>Interview Observations</h2>
      <h2 className="h2-title">Questions for users:</h2>
      <div>
        <ul>
            <li><h3 class="para">Does the gas dispenser machine interface work as you expected? </h3></li>
            <li><h3 class="para">What motivates you to push the button instead of touching the screen?</h3></li>
            <li><h3 class="para">Are any actions you took that you think are unnecessary while still delivering the same result? </h3></li>
            <li><h3 class="para">Recall the first time you used the gas dispenser machine. How differently do you use it between now and before? </h3></li>
            <li><h3 class="para">What is the flow of the whole interaction? When did you discover the flow?</h3></li>
    
        </ul>
    </div>
      <h2 className="h2-title">Observations:</h2>
      <div>
        <ul>
            <li><h3 class="para">All users started by pushing the button instead of touching the screen, even though the screen was big enough to be considered a touch screen. Users responded that choices are mapped with the button, and there are also arrows on the answer pointing to the button. The low resolution of the screen also gives them a sense that it’s old enough not to carry these features. </h3></li>
            <li><h3 class="para">Two users responded that when paying, the machine asked for the type of card to pay with. They think that it is totally unnecessary since when they are using POS machines in other places, such as grocery stores, the POS machine can accept all cards without distinguishing them before swiping.</h3></li>
            <li><h3 class="para">All users agree that the pin pad is not covered. People can easily see when they are typing their pin. They had to cover them with their hands.</h3></li>
            <li><h3 class="para">When people have their first gas station experience, they often do not know which side their fuel tank is on. They do not know whether to plug in first or choose their gas type first. </h3></li>
            <li><h3 class="para">They also did not know that they could clip the button instead of keeping pushing to continually add fuel. They learned how to properly use the machine either by trying a few times or being taught by some experienced driver. </h3></li>
            
        </ul>
    </div>
 


    </section>
    <section>
      <div className='div2'></div>
    </section>

    <section id="em1" className="workCon2">
    <h2>Empathy Map 1</h2>
    <h2 className="h2-title">Mina, a new driver who just got her first car and trying to add gasoline for the first time.</h2>
      <div>
       <h3 class="para">Mina is confused on how to use the gasoline machine. She did not know whether she plug in properly. She did not know which type of fuel and which side of tank she has. The pin pad is also not covered.
This represents the group of new drivers who just started using the interface. They may encounter problems on unclear instructions. </h3>
<div class="image-container"> <img src={process.env.PUBLIC_URL + "/" + "images/map1.png"} alt="Sketch" width="50%"  /></div>
    </div>
      

    </section>
    <section>
      <div className='div1'></div>
    </section>
    <section id="em2" className="workCon3">
    <h2>Empathy Map 2</h2>
    <h2 className="h2-title">Anna, a driver has beening driving for years.</h2>
      <div>
       <h3 class="para">Anna has no place to park because too many cars has the same sided tank. She does not know which gas station accept her desired card since there are so many gas stations.
This represents the group of experienced drivers. They know the process but some interface are making them frustrating. </h3>
<div class="image-container"> <img src={process.env.PUBLIC_URL + "/" + "images/map2.png"} alt="Sketch" width="50%"  /></div>
    </div>
      

    </section>
    <section>
      <div className='div2'></div>
    </section>
    <section id="sb" className="workCon2">
    <h2>Storyboard</h2>
     
<div class="image-container"> <img src={process.env.PUBLIC_URL + "/" + "images/storyboard.png"} alt="Sketch" width="100%" height="100%" /></div>
    
      

    </section>


   

    
    </div>
    </>
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



