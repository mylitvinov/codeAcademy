import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//  ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));

// // Write code here:=====================================================================
// const myList = (
//   <ul>
//     <li>Maxim</li>
//     <li>Litvinov</li>
//   </ul>
// );

// ReactDOM.render(
//   myList,
//    document.getElementById('app')
//   );

//  // Write code here:**************************************************************************
//  //className

// const myDiv = <div className='big'> I AM A BIG DIV </div>

// ReactDOM.render(myDiv,document.getElementById('app'))

// //***********************************************************************************
// // Самозакрывающиеся теги

// const profile = (
//   <div>
//     <h1>I AM JENKINS</h1>
//     <img src="" />
//     <article>
//       I LIKE TO SIT
//       <br/>
//       JENKINS IS MY NAME
//       <br/>
//       THANKS HA LOT
//     </article>
//   </div>
// );

//*****************************************************************************

// JSX в JavaScript

// ReactDOM.render(
//   <h1>{2 + 3}</h1>,
//   document.getElementById('root')
// );

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

// const math = <h1>2 + 3 = {2 + 3}</h1>;
// ReactDOM.render(math,document.getElementById('root') )

//*****************************************************************************

// const theBestString = 'tralalalala i am da best';

// ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('root'));

//*****************************************************************************

// Атрибуты

// const pics = {
//   panda: "http://bit.ly/1Tqltv5",
//   owl: "http://bit.ly/1XGtkM3",
//   owlCat: "http://bit.ly/1Upbczi",
//   goose : 'https://content.codecademy.com/courses/React/react_photo-goose.jpg'
// }; 
//  const animals = [
//   (
//     <img 
//       src={pics.panda} 
//       alt="Lazy Panda" />
//   ),
   
//   (
//     <img 
//       src={pics.owl} 
//       alt="Unimpressed Owl" />
//   ),
   
//   (
//     <img 
//       src={pics.owlCat} 
//       alt="Ghastly Abomination" />
//   ),
//   (
//     <img src = {pics.goose} />
//   )
// ]

// const randomAnimalIndex = Math.floor(Math.random()*animals.length)

// ReactDOM.render(animals[randomAnimalIndex], document.getElementById('root'))

//*****************************************************************************

// слушатели событий

// function makeDoggy(e) {
//   // Call this extremely useful function on an <img>.
//   // The <img> will become a picture of a doggy.
//   e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
//   e.target.setAttribute('alt', 'doggy');
// }

// const kitty = (
// 	<img
//    	src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg" 
// 		alt="kitty"
//     height='300px'
//     width='400px'
//     onClick = {makeDoggy}  
//     />
// );

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

// ReactDOM.render(kitty, document.getElementById('root'));

// if оператор

// let message;

// if (user.age >= drinkingAge) {
//   message = (
//     <h1>
//       Hey, check out this alcoholic beverage!
//     </h1>
//   );
// } else {
//   message = (
//     <h1>
//       Hey, check out these earrings I got at Claire's!
//     </h1>
//   );
// }

// ReactDOM.render(
//   message, 
//   document.getElementById('app')
// );

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
 // Тернарный оператор

//  function coinToss () {
//   // Randomly return either 'heads' or 'tails'.
//   return Math.random() < 0.5 ? 'heads' : 'tails';
// }

// const pics = {
//   kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
//   doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
// };

// const img = <img src={pics[coinToss() === 'heads'  ? 'kitty' : 'doggy']} />;

// ReactDOM.render(
// 	img, 
// 	document.getElementById('app')
// );

/* const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);
*/

// **********************************************************************************

// &&

// const tasty = (
//   <ul>
//     <li>Applesauce</li>
//     { !baby && <li>Pizza</li> }
//     { age > 15 && <li>Brussels Sprouts</li> }
//     { age > 20 && <li>Oysters</li> }
//     { age > 25 && <li>Grappa</li> }
//   </ul>
// );

// const judgmental = Math.random() < 0.5;

// const favoriteFoods = (
//   <div>
//     <h1>My Favorite Foods</h1>
//     <ul>
//       <li>Sushi Burrito</li>
//       <li>Rhubarb Pie</li>
//       {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
//       <li>Broiled Grapefruit</li>
//     </ul>
//   </div>
// );

// ReactDOM.render(
// 	favoriteFoods, 
// 	document.getElementById('app')
// );



// **********************************************************************************

// map()

// const strings = ['Home', 'Shop', 'About Me'];
 
// const listItems = strings.map(string => <li>{string}</li>);
 
// (<ul>{listItems}</ul>)


// // This is fine in JSX, not in an explicit array:
 
// (<ul>
//   <li>item 1</li>
//   <li>item 2</li>
//   <li>item 3</li>
// </ul>)
 
// // This is also fine!
 
// const liArray = [
//   <li>item 1</li>, 
//   <li>item 2</li>, 
//   <li>item 3</li>
// ];
 
// <ul>{liArray}</ul>



// const people = ['Rowe', 'Prevost', 'Gare'];

// const peopleLis = people.map((person) =>
//   // expression goes here:
//   <li >{person}</li>

// );

// // ReactDOM.render goes here:
// ReactDOM.render(
// <ul>{peopleLis}</ul>,
// document.getElementById('root')
// )

// атрибут key 
// const peopleLis = people.map((person,i) =>
//   // expression goes here:
//   <li key={'person_' + i}>{person}</li>

// );

//============================================================================









