
import './App.css';
import * as React from 'react';

import Navbar1 from './components/Navbar1';

function Redesign() {
  return (
    <>
    
    <Navbar1 />
    <div className="container">
    <section id="me" className="workCon2">
    <div className='container_left'>
    <div className='r-title'>
        <h2>Responsive Redesign</h2>
      </div>
    </div>    
    <div className="rr-1">
          <div>
            <div class="image-container"> <img src={process.env.PUBLIC_URL + "/" + "images/screenshot_web.png"} alt="Screenshot of Web" width="100%" height="100%" /></div>
          </div>
          <div className="me-div">
            <h2 className="me-title">Original Website: <a href="https://www.myvisajobs.com/">https://www.myvisajobs.com/</a></h2>
            <h3 className="me-des">I choose this website because it only has basic designs, and the whole website is filled with blue and underlined links. </h3>
          </div>
    </div>
    </section >
    <section>
      <div className='div1'></div>
    </section>
    <section id="up" className="workCon">
    <h2>Usability Problems</h2>
      <h2 className="h2-title">Usability</h2>
      <div>
        <ul>
            <li><h3 class="para">The navigation is small and has no background color, making it harder for a user to notice.  </h3></li>
            <li><h3 class="para">The bottom of the page seems to be in the same category as the top of the page, but they are separated, which could make it harder for a user to navigate the function. </h3></li>
            <li><h3 class="para">The primary purpose of this website is to help job seekers determine whether a company is willing to sponsor a working visa or not. However, the search bar is too small, which makes users hard to notice it.  </h3></li>
            <li><h3 class="para">The whole page is filled with small details of every functionality it provides. However, most users are just looking for one, and such distracting information could make users hard to find what they want.  </h3></li>
            <li><h3 class="para">The “Blog” section is hard to notice since the only indicator is the word “Blog” before the title. </h3></li>
    
        </ul>
    </div>
      <h2 className="h2-title">Learnability</h2>
      <div>
        <ul>
            <li><h3 class="para">A first-time user could be distracted by the information all over the page. Since each section has a short title and ample retail space, it is hard for first-time users to navigate where they want. </h3></li>
            <li><h3 class="para">They might not notice that there is a navigation bar on top. They must move around the top search box and bottom listing if they want to look for certain employers. This is a considerable distance for a similar purpose. </h3></li>
            <li><h3 class="para">If they want to follow the process on the site, they have to navigate to the rightmost part of the page and look down to see the “Get Started” section. This section should be at the beginning, where users first land their eyes on. </h3></li>
            <li><h3 class="para">This is not a website that most people are familiar with. It needs more information, such as an introduction to the functionalities.  </h3></li>
        </ul>
    </div>
      <h2 className="h2-title">Memorability</h2>
      <div>
        <ul>
            <li><h3 class="para">For old users, even when they know the link they want to click, they can still miss clicking on something else since many connections stick together. </h3></li>
            <li><h3 class="para">With multiple places containing similar information, users who are constantly visiting the page might never click on it even though it has the functionalities that the user wants. Sometimes the user might forget the link that the user clicked last time.</h3></li>
            <li><h3 class="para">It is hard for users to memorize the functionalities	of each section since every section looks almost the same. The only distinguisher is the small headers.  </h3></li>
        </ul>
    </div>



    </section>

    <section>
      <div className='div2'></div>
    </section>
    <section id="tf" className="workCon2">
    <h2>WAVE Test Findings</h2>
      <div>
        <ul>
            <li><h3 class="para">One of the images has no alternative text. I agree. However, the image serves no purpose, so I think it should be entirely removed. </h3></li>
            <li><h3 class="para">The contrasting problem in the search area is a problem because it makes the search area stand out less, which makes it harder for users to notice it.             </h3></li>
            <li><h3 class="para">WAVE detected a lot of redundant links. I agree with WAVE on this since there are too many links on the website, and some links are very unlikely to be clicked. In addition, many links point to the same link.</h3></li>
            <li><h3 class="para">The most appeared alerts are not a proper use of layout table alerts. The website used tables to lay out each section and content. I agree that the website should avoid doing so because	it makes every section similar, but some sections have more importance than others. </h3></li>
        </ul>
    </div>
      

    </section>
    <section>
      <div className='div1'></div>
    </section>

    <section id="vsg" className="workCon3">

    <h2>Visual Design Guide</h2>
        
        <div class="image-container"> <img src={process.env.PUBLIC_URL + "/" + "images/designguide.png"} alt="Screenshot of Web" width="70%" height="70%" /></div>
    </section>
    <section>
      <div className='div2'></div>
    </section>
    <section id="lfp" className="workCon2">

    <h2>3 Low-fidelity Wireframing</h2>
      <h2 className="h2-title">For Desktop View</h2>
      <div class="image-container"> <img src={process.env.PUBLIC_URL + "/" + "images/lofi_laptop.png"} alt="Screenshot of Web" width="70%" height="70%" /></div>
      <h2 className="h2-title">For Tablet View</h2>
      <div class="image-container"> <img src={process.env.PUBLIC_URL + "/" + "images/lofi_tablet.png"} alt="Screenshot of Web" width="70%" height="70%" /></div>
      <h2 className="h2-title">For Phone View</h2>
      <div class="image-container"> <img src={process.env.PUBLIC_URL + "/" + "images/lofi_phone.png"} alt="Screenshot of Web" width="70%" height="70%" /></div>

    </section>
    <section>
      <div className='div1'></div>
    </section>
    <section id="hfp" className="workCon">
    <h2>3 Hi-fidelity Wireframing</h2>
    <h2 className="h2-title">For Desktop View</h2>
    <div class="image-container"> <img src={process.env.PUBLIC_URL + "/" + "images/hifi_laptop.png"} alt="Screenshot of Web" width="70%" height="70%" /></div>
    <h2 className="h2-title">For Tablet View</h2>
    <div class="image-container"> <img src={process.env.PUBLIC_URL + "/" + "images/hifi_tablet.png"} alt="Screenshot of Web" width="70%" height="70%" /></div>
    <h2 className="h2-title">For Phone View</h2>
    <div class="image-container"> <img src={process.env.PUBLIC_URL + "/" + "images/hifi_phone.png"} alt="Screenshot of Web" width="70%" height="70%" /></div>
    <h3 className="rd-h3">I choose flex box as my main component for putting items. The reason is that most of my designs are rectangular buttons grouped together. The best way to placed them is to use flex box to hold them. They will shrink or strench size as the page size changes. In addition, it also helps aligning items from horizontal to vertical as turing from bigger screen to smaller screen. </h3>
    <h3 className="rd-h3">I only change font size when turning into phone screen size since the all of my items are relatively big. Therefore changing the font size won't affect the visual a lot. </h3>
    <h3 className="rd-h3">As the screen becomes smaller, some lists are collapsed to save space. In this case, users simply can click to expand the bar. </h3>

    </section>
    <section>
      <div className='div2'></div>
    </section>
    <section id="rp" className="workCon2">
    <h2>Responsive Redesigned Page</h2>
    <h2 className="h2-title">Here is the link to the redesigned page. </h2>
    <h2 className="h2-title"><a href="https://sleepypenguin367.github.io/responsive-page/">https://sleepypenguin367.github.io/responsive-page/</a></h2>

    <h1 className="rd-h1">Reference</h1>
    <h1 className="rd-h1">Some color combos: https://www.colorcombos.com/color-schemes/296/ColorCombo296.html </h1>
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

 export default Redesign;

