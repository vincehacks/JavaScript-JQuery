/* Created by Vince Chang
 * In order to bundle this file, run this command
 * ./node_modules/.bin/webpack js/index.js -o dist/bundle.js
 * This means, run webpack, take index.js and bundle it into a file called
 * bundle.js and store it under the dist directory
 */

// Importing code from myLib.js and calling it here in this file
// import defaultImport, {renamedFunc, myFunc3, unnecessary} from './myLib.js';
// defaultImport();
// renamedFunc();
// myFunc3();
// unnecessary();
//
// class Foo {
//   bar(){
//     console.log('classes!');
//   }
// }


// Uncomment this to practice ReactJS
import ReactDOM from 'react-dom'; //import react-dom from npm install dir
import React from 'react'; //import react from npm install dir
import Heading from './heading.js';

// const user = 'Vince';
// const formatUser = (userName) => {
//   return userName + '!!';
// }
//
// const myJSX = <h2> Hello {formatUser(user)} </h2>;

ReactDOM.render(
  <section>
    <Heading name="Vince" userType="admin"></Heading>
    <Heading name="Chang"></Heading>
  </section>,
  document.querySelector('main')
);