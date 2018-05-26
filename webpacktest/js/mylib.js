// Created by Vince Chang

const myFunc = function(){
  console.log('myFunc included!');
}

const myFunc2 = function(){
  console.log('also included');
}

const myFunc3 = function(){
  console.log('dont forget me');
}

const unnecessary = function(){
  console.log('unnecessary');
}

export {unnecessary};
export {myFunc3}; // Exporting with the given name
export {myFunc2 as renamedFunc}; // Practicing exporting as a different name
export default myFunc; // This is RequireJS's version of define([],function())