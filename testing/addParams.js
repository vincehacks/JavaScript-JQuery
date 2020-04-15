// Created by Vince Chang
// This file has a function that will be tested in suite.js

const addParams = (param1, param2) => {
  if (typeof param1 === "string" || typeof param2 === "string") {
    return param1 + param2;
  }
  return Math.abs(param1 + param2);
};

// Export this function to use in a test file
module.exports = addParams;
