// Created by Vince Chang
// Run this file: node jsPractice.js

// Person functionality done by a function
function Person1(name, friends) {
  this.name = name;
  this.friends = friends;
  this.logName = function() {
    console.log(this.name);
  };
  this.logFriends = function() {
    this.friends.forEach(friend => {
      console.log(this.friends);
    });
  };
}

var me = new Person1("vince", ["drake", "migos"]);
console.log("FUNCTION: Person1()");
me.logName();
me.logFriends();
console.log("\n");
/******************************************************************************/

// Same thing but done with a Class
class Person {
  constructor(name, friends) {
    this.name = name;
    this.friends = friends;
  }

  sayYourName() {
    console.log("Your name is " + this.name);
  }

  yourFriendsAre() {
    this.friends.forEach(friend => {
      console.log("And your friends are " + friend);
    });
  }
}

var person = new Person("vince", ["drake", "migos"]);
console.log("FUNCTION: Person()");
person.sayYourName();
person.yourFriendsAre();
console.log("\n");
/******************************************************************************/

// FOR OF LOOPS
console.log("FUNCTION: forOfLoop()");
function forOfLoop() {
  var array = [1, 2, 3];
  console.log("Printing the elements in [1,2,3] using a for of loop");
  for (let element of array) {
    console.log(element);
  }
}
forOfLoop();
console.log("\n");
/******************************************************************************/

// Using a default value, 3 ways to do this:
// Pass in a default value, use ternary operator, or the || operator
console.log("FUNCTION: multBy2()");
var multBy2 = function(value = 2) {
  // Ternary
  // var defaultVal = (value)?value:0;

  // Using an || to do it
  // var defaultVal = value||0;

  // return defaultVal * 2;
  return value * 2;
};
console.log("2 * 2 = " + multBy2());
console.log("\n");
/******************************************************************************/

// Using Arguments
console.log("FUNCTION: sum()");
function sum() {
  var sum = 0; // arguments.length will be the number of arguments passed in
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log("1 + 2 + 3 + 4 + 5 = " + sum(1, 2, 3, 4, 5)); // Results to 15
console.log("\n");
/******************************************************************************/

// ... Spread operator
console.log("FUNCTION: spreadSum()");
// spreadSum(...arrayParam) == spreadSum([1,2,3,4,5])
function spreadSum(...arrayParam) {
  var sum = 0;
  for (var i = 0; i < arrayParam.length; i++) {
    sum += arrayParam[i];
  }

  return sum;
}

const values = [1, 2, 3, 4, 5]; // spreadSum(..values) == spreadSum(1,2,3,4,5)
console.log("1 + 2 + 3 + 4 + 5 = " + spreadSum(...values)); // Results to 15
console.log("\n");
/******************************************************************************/

// New lines without using the + operator, just need to use backticks ``
// ${} inserts JS into a string
function newNewLine() {
  console.log("FUNCTION: newNewLine()");
  var adjective = "awesome";
  var template = `  I wrote a haiku
  This is so very ${adjective}
  Now I am finished`;

  console.log(template);
}
newNewLine();
console.log("\n");
/******************************************************************************/

// Inline JS in a string using ${}
var name = "Vince";
console.log("FUNCTION: yell()");
function yell(value) {
  return value.toUpperCase();
}
console.log(`Hello ${yell(name)}!`);
console.log("\n");
/******************************************************************************/

// Object Literal Upgrades
function objLiteralUpgrades() {
  console.log("FUNCTION: objLiteralUpgrades()");

  var a = 8;
  var b = 9;
  var c = 10;

  var obj = {
    // This is saying a = a => a = 8
    a,
    b,
    c,
    d() {
      console.log("a = " + this.a + " b = " + this.b + " c = " + this.c);
    }
  };
  c = 100; // This won't change c, because `c,` is just a copy!
  obj.d(); // d is still 8, 9 , 10
  console.log("\n");
}
objLiteralUpgrades();
/******************************************************************************/

// Array Destruction, this is one to one mapping
function arrayDestruction() {
  console.log("FUNCTION: arrayDestruction()");

  var a, b;
  [a, , b] = [1, 2, 3, 4];
  console.log("a is " + a); // a = 1
  console.log("b is " + b); // b = 3
}
arrayDestruction();
console.log("\n");
/******************************************************************************/

// ES6 Class practice
function Car(name) {
  console.log("FUNCTION: Car()");

  // Private vars
  let gas = 100;

  // Private methods
  const useGas = amount => {
    gas -= amount;
  };

  // Public Methods
  this.drive = distance => {
    useGas(distance / 5);
  };
  this.getGasLevel = () => {
    return gas;
  };
}

const myCar = new Car("Awesome Car");
console.log("The starting gas level is " + myCar.getGasLevel());
myCar.drive(10);
console.log("After driving 10 miles the gas level is " + myCar.getGasLevel());
console.log("\n");
/******************************************************************************/
