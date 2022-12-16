
import './App.css';
import * as React from 'react';

import Navbar2 from './components/Navbar2';

function Iterative() {
  return (
    <>
    
    <Navbar2 />
    <div className="container">
    <section id="me" className="workCon2">
    <div className='container_left'>
    <div className='r-title'>
        <h2>Iterative Design</h2>
      </div>
    </div>    
    <div>
   <h2 className="h2-title">Project Overview</h2>
   <h3 className="rd-h3"> In this project, we went through the full process of mocking up a solution to the startup's concept. We choose AeonCharge as our startup. It is an app designed for electric vehicle drivers to find and pay for a charger in the US. The application's primary purpose would be to integrate different networks and provide a coherent service. Our exemplifications for the iterative process flow include sketching initial ideas and combining them into wireframes, creating an interactive high-fidelity mockup, collecting and incorporating feedback, and having test users try out on UserTesting.com. </h3>
    </div>
    </section >
    <section>
      <div className='div1'></div>
    </section>
    <section id="ske" className="workCon">
    <h2>Sketches</h2>
      <h2 className="h2-title">Here are our four sets of sketches:</h2>
      <div className="id-con">
      <div>
        <img src={process.env.PUBLIC_URL + "/images/" + "s_1-1.jpg"} width="32%"/>
        <img src={process.env.PUBLIC_URL + "/images/" + "s_1-2.jpg"} width="32%" />
        <img src={process.env.PUBLIC_URL + "/images/" + "s_1-3.jpg"} width="32%" />
      </div>

      <div>
        <img src={process.env.PUBLIC_URL + "/images/" + "s_2-1.jpg"} width="32%" />
        <img src={process.env.PUBLIC_URL + "/images/" + "s_2-2.jpg"} width="32%" />
        <img src={process.env.PUBLIC_URL + "/images/" + "s_2-3.jpg"} width="32%" />
      </div>

      <div>
        <img src={process.env.PUBLIC_URL + "/images/" + "s_3-1.jpeg"} width="32%"  />
        <img src={process.env.PUBLIC_URL + "/images/" + "s_3-2.jpeg"} width="32%"  />
        <img src={process.env.PUBLIC_URL + "/images/" + "s_3-3.jpeg"} width="32%"  />
      </div>

      <div>
        <img src={process.env.PUBLIC_URL + "/images/" + "s_4.png"} width="100%"  />
      </div> 
      </div>


    </section>
    <section>
      <div className='div2'></div>
    </section>

    <section id="wf" className="workCon2">
    <h2>Wireframs</h2>
      <h2 className="h2-title">
        Here is our set of wireframes:
      </h2>
      <div>
        <img src={process.env.PUBLIC_URL + "/images/" + "lo-fi_4.png"} width="10%"/>
        <img src={process.env.PUBLIC_URL + "/images/" + "lo-fi_7.png"} width="10%"/>
        <img src={process.env.PUBLIC_URL + "/images/" + "lo-fi_6.png"} width="10%"/>
        <img src={process.env.PUBLIC_URL + "/images/" + "lo-fi_1.png"} width="10%" />
        <img src={process.env.PUBLIC_URL + "/images/" + "lo-fi_3.png"} width="10%"/>
        <img src={process.env.PUBLIC_URL + "/images/" + "lo-fi_2.png"} width="10%" />
        <img src={process.env.PUBLIC_URL + "/images/" + "lo-fi_5.png"} width="10%" />
        
      </div>
      

    </section>
    <section>
      <div className='div1'></div>
    </section>

    <section id="hfm" className="workCon3">
    <h2>Hi-Fi Mockup</h2>
   
    <video width="100%" controls>
          <source src={process.env.PUBLIC_URL + "/images/" + "figma.mp4"} type="video/mp4" />
        </video>
        <h2 className="h2-title">
      Critique Feedback
      </h2>
            <ul>
              <li><h3 class="para">Ongoing orders not going straight back to the home page: confusing because the order has gone through.
              </h3></li>
              <li><h3 class="para">Station page: two icons in address, unclear whether they are buttons or just indicative icons. </h3></li>
              <li><h3 class="para">Should be a way to access orders at a certain station when you’re on this station’s page. </h3></li>
              <li><h3 class="para">Back button to go back to the homepage. </h3></li>
              <li><h3 class="para">Slide up and down instead of clicking. </h3></li>
              <li><h3 class="para">Ongoing charge, getting back to a page never went on (Meow station). Also, no clear way to go straight.
                back to the home page from the station page - have to click on the map. </h3></li>
              <li><h3 class="para">Spacing is different between hamburger and setting. </h3></li>
              <li><h3 class="para">Locolization icon in home page is lost in the background because of low contrast </h3></li>
            </ul>
    </section>
    <section>
      <div className='div2'></div>
    </section>
    

    <section id="ut" className="workCon2">
    <h2>User Testing</h2>
    <div>

      <div className="id-ut">
        <div>
          <img src={process.env.PUBLIC_URL + "/images/" + "user1.gif"} alt="User 1" width="40%" height="100%" />
          <a href="https://drive.google.com/file/d/1paRhIqAZY9vnFt_6FzJENZAUDzqOzhgQ/view?usp=sharing">User 1</a>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "/images/" + "user2.gif"} alt="User 2" width="40%" height="100%" />
          <a href="https://drive.google.com/file/d/1T4ImmXNVsgxxRclMTd8JRAPbehmrXe7n/view?usp=sharing">User 2</a>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "/images/" + "user3.gif"} alt="User 3" width="40%" height="100%" />
          <a href="https://drive.google.com/file/d/1mrAKMBg2lQVRbqplkJmjBwuqXAz9hMHX/view?usp=sharing">User 3</a>
        </div>
      </div>


      <h2 className="h2-title">Overview</h2>
      <h3 class="para">Basically, the user experience was what we expected, they could explore how to use the app by common sense and
        the process is straight. But there was some confusion in the beginning because the user was not familiar with
        how to click on Figma and the task was not obvious. And users are not used to operating mobile apps on
        computers.</h3>

      <h2 className="h2-title">Task Result</h2>
      <ul>
        <li><h3 class="para">They can find filters in the search interface, and the filter information is clear and convenient.</h3></li>
        <li><h3 class="para">For the promotions, both users found the correct icon and found it quick and convenient, while one user was
          unsure of its function but also showed the promotion in search and the station page. She thinks there should
          also be a discount option on the filter interface.</h3></li>
        <li><h3 class="para">Users have successfully used common sense to find out how to edit personal information and settings through
          the hamburger button.</h3></li>
        <li><h3 class="para">User completion is not ideal for finding an order in progress. Although the page was found, the button
          didn't provide enough information to click (they probably thought it was a logo). A user chose to find an
          Order in progress through Order history.</h3></li>
        <li><h3 class="para">The overall process was clear, but one user said the process was not clear because the task instructions
          were not in a clear order.</h3></li>
      </ul>

      <h2 className="h2-title">Pros</h2>
      <ul>
        <li><h3 class="para">"I like that I can fid charging stations on the map very clear."</h3></li>
        <li><h3 class="para">"Very clean, simple and easy to use interface. Looks professional."</h3></li>
        <li><h3 class="para">"New, and offering great data."</h3></li>
        <li><h3 class="para">The personal settings interface is clear and straightforward, and the hamburger button helps a lot.</h3></li>
      </ul>

      <h2 className="h2-title">Cons</h2>
      <ul>
        <li><h3 class="para">It is not clear that estimate total because there is no way to determine the actual amount (but the amount
          depends on the time).</h3></li>
        <li><h3 class="para">On the search page it would be nice if it could display a numeric sort on the left.</h3></li>
        <li><h3 class="para">The order in progress is not visible enough to determine whether to click.</h3></li>
        <li><h3 class="para">The page is not friendly and some of the information is not very straightforward.</h3></li>
      </ul>

      <h2 className="h2-title">Improvement</h2>
      <ul>
        <li><h3 class="para">The search results screen displays the sorted number of each charging station.</h3></li>
        <li><h3 class="para">The filter should also offer a choice of whether there is a deal or not.</h3></li>
        <li><h3 class="para">The coupon button is not obvious, try to change it to the mailbox message button and put the offer push
          inside, while also receiving other messages</h3></li>
        <li><h3 class="para">The ongoing charging button does not determine if there is an ongoing order, which is more obvious by using
          a small red-circled number on the side.</h3></li>
        <li><h3 class="para">Consider placing the ongoing charging in the lower left corner and the app logo in place.</h3></li>
        <li><h3 class="para">The search bar could be larger for users to use while driving.</h3></li>
        <li><h3 class="para">The pins on the map should provide thumbnail information when clicked.</h3></li>
      </ul>
    </div>


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

 export default Iterative;

