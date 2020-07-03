// Created by: Vince Chang
// Rule of thumb is use CONST and LET, but not VAR


/******************************************************************************
 * var = function scope or global scope, available anywhere
 ******************************************************************************/

var cats = 2;

function myCats() {

  var cats = 10;

  if (cats < 5)
    console.log(`I have ${cats} cats`);
  else
    console.log("That's a lot of cats!"); // This will print bc cats is within
}

if (true)
  var cats = 15; // Now will print 15

console.log(cats); // This will print 15 since the "outside" declaration of cats
// has been updated to 15

myCats();
/******************************************************************************/

/******************************************************************************
 * let = BLOCKED SCOPED, inside a curly brackets (a block) you can't get it out
 ******************************************************************************/

let bats = 2;

function myBats() {

  let bats = 4;
  // let bats = 5; this will throw an error because bats already defined

  if (bats < 5) {
    let bats = 1; // Can declare bats again inside this block
    console.log(`I have ${bats} bat`);
  }
  else
    console.log("That's a lot of bats!");
}

// if (true) {
//   bats = 15; // Now will print 15
// }
console.log(bats); // This will print 15 since the "outside" declaration of bats
// has been updated to 15

myBats();

/******************************************************************************
 * const = won't let you modify, but you can update in some situations
 ******************************************************************************/

const hats = 2;

const obj = {
  hat: "black"
};

console.log(obj.hat); // Prints black

obj.hat = "purple";
console.log(obj.hat); // Updates hat to purple, even if it declared as const
// because you can update properties

// const obj = {
//   hat: "red"
// };

// console.log(obj.hat); // ERROR, can't modify a const object, because const


function myHats() {

  if (hats < 5) {
    let hats = 1; // Can declare hats again inside this block
    console.log(`I have ${hats} hat`);
  }
  else
    console.log("That's a lot of hats!");
}

// hats = 3; // Can't be declared again or updated because it is const
console.log(hats);

myHats();