// Created by Vince Chang
// This is an indivdual file that has a function that will be tested in suite.js

const multBy2 = (initialVal) => {
  if(typeof initialVal === 'string'){
    return false;
  }
  else{
    return initialVal * 2;
  }
}

// Export this function to use in a test file
module.exports = multBy2;