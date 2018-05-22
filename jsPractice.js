// Created by Vince Chang
// Run this file: node jsPractice.js

// Example of a basic Person functionality done by a function
function Person1(name, friends){
  this.name = name;
  this.friends = friends;
  this.logName = function(){
    console.log(this.name);
  }
  this.logFriends = function(){
    this.friends.forEach((friend)=>{
      console.log(this.friends);
    });
  }
}

var me = new Person1('vince',['drake','migos']);
console.log("FUNCTION: Person1()");
me.logName();
me.logFriends();
console.log("\n");
/******************************************************************************/

// Same thing but done with a Class
class Person {
  constructor(name,friends){
    this.name = name;
    this.friends = friends;
  }

  sayYourName(){
    console.log("Your name is " + this.name);
  }

  yourFriendsAre(){
    this.friends.forEach((friend)=>{
      console.log("And your friends are " + friend);
    });
  }
}

var person = new Person('vince',['drake','migos']);
console.log("FUNCTION: Person()");
person.sayYourName();
person.yourFriendsAre();
console.log("\n");
/******************************************************************************/

// FOR OF LOOPS
console.log("FUNCTION: forOfLoop");
function forOfLoop(){
  var array = [1,2,3];
  for(let element of array){
    console.log(element);
  }
} forOfLoop();

// Practicing how to use a default value, 3 ways to do this:
// Pass in a default value, use ternary operator, or the || operator
var multBy2 = function(value){
  // Ternary
  // var defaultVal = (value)?value:0;

  // Using an || to do it
  // var defaultVal = value||0;

  // return defaultVal * 2;
  return value *2;
}

console.log(multBy2());

// // Using Arguments
// function sum(){
//   var sum = 0;
//   for(var i = 0; i < arguments.length; i++){
//     sum += arguments[i];
//   }
//   return sum;
// }

// console.log(sum(1,2,3,4,5));



// ... Spread operator
// function sum(...arrayParam){
//   var sum = 0;
//   for(var i = 0; i < arrayParam.length; i++){
//     sum += arrayParam[i];
//   }

//   return sum;
// }

// const values = [1,2,3,4,5];
// console.log(sum(...values));



// New lines without using the +
// var adjective = 'awesome';
// var template = `I wrote a haiku
// This is so very ${adjective}
// Now I am finished`;

// console.log(template);


// // Trying to use inline JS in a string using ${}
// var name = "Vince";
// function yell(value){
//     return value.toUpperCase();
// }
// console.log (`Hello ${yell(name)}!`);


// Object Literal Upgrades
// var a = 8;
// var b = 9;
// var c = 10;

// var obj = {
//   // this is like a = a; etc
//   a,
//   b,
//   c,
//   d(){
//       console.log(this.a, this.b, this.c);
//   }
// }
// c = 100; // this won't change c, because `c,` is just a copy!
// obj.d();


// Array Destruction
// var a, b;
// [a,,b] = [1,2,3,4];
// console.log(a); // a = 1
// console.log(b); // b = 3





























