
import './App.css';
import * as React from 'react';
import Navbar4 from './components/Navbar4';


export default function ReactDevelopment() {
  return (
    <>
    <Navbar4 />
    <div className="container">
    <section id="me" className="workCon2">
    <div className='container_left'>
    <div className='r-title'>
        <h2>Milk Tea Shop</h2>
      </div>
    </div> 
    <h3 className="mts-des">Many milk tea shops need the necessary filtering features that allow users to filter the drinks they want by ingredients. This troubles users who have allergies to certain ingredients.  </h3>   
    <h3 className="mts-des">Here is the link to my React app. <a href="https://sleepypenguin367.github.io/development1300/">https://sleepypenguin367.github.io/development1300/</a></h3>
    <div>
   <h2 className="h2-title">Goal and Value</h2>
   <h3 className="rd-h3"> The goal of the application is to let users choose and buy milk teas in a milk tea shop. Users are able to filter their desired drinks by ingredients and toppings based on a choice of caffeine preference. They can also sort the drinks by popularity, which is the default, ratings, and prices. They can add drinks to the shopping cart with the ability to add and delete the number of each drink. The application is aimed to provide a better experience when buying milk tea from a milk tea shop.</h3>
    </div>
    <div>
   <h2 className="h2-title">Usability Principles</h2>
   <h3 className="rd-h3"> Usability: I made each section clearly distinguishable from each other with a flow. Users can work by sorting/filtering from the left, choosing the drinks in the middle, and checking out at the right.
  </h3>
  <h3 className="rd-h3"> Learnability: I made distinctions between different features using different inputs: radio and checkbox. Users are able to learn that the sorting radio group and the caffeine or caffeine-free radio group both only allow one radio button to be selected at the same time, whereas the ingredients and toppings part allows for multiple checkboxes to be checked to use the filtering feature.</h3>
    </div>
    <div>
   <h2 className="h2-title">Organization of Components</h2>
   <h3 className="rd-h3"> The main app uses three components: topbar, menu, cart, and item. The menu component also has four different components, in which each representing a feature of sorting/filtering.
  </h3>
    </div>
    <div>
   <h2 className="h2-title">How Data is Passed Down Through Components</h2>
   <h3 className="rd-h3"> All data passes down through components using props. The app passes state and set state items to the menu component, and the menu components send these props to its sub-components to perform the changes in state, including caffeine group, sorting, ingredients group, and toppings group. Data from JSON are passed to the item component for each item. The cart array and total are passed to the cart component. </h3>
    </div>
    <div>
   <h2 className="h2-title">How the User Triggers State Changes</h2>
   <h3 className="rd-h3"> For sorting, the state uses a string to decide which sorting way to use, and it is triggered by the radio group in the sorting component. For caffeine, the state uses a boolean since there are only two mutually exclusive groups. For ingredients and toppings, the state uses a list of strings to track the ingredients and toppings selected through the checkbox. For the cart, the users use add to cart button and also the plus and minus from the cart to trigger the state, in which it uses a list of dictionaries to sort the name and number of items added.</h3>
    </div>
    </section >

    

    
    </div>
    </>
  );
}





    




