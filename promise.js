// Created by: Vince Chang

// Promises are used when other functions depend on other functions

let firstFunction = function () {
  return new Promise(
    function (resolve, reject) {
      resolve('Success');
    }
  )
}

// Prints Promise { 'Success' }
console.log('First function ' + firstFunction());

let secondFunction = function (dataFromFirstFunction) {
  return new Promise(
    function (resolve, reject) {
      resolve(dataFromFirstFunction + ' YAY!');
    }
  )
}

// Prints Promise{"undefined + YAY!"} because firstFunction was not yet called
console.log('Second function ' + secondFunction());


// Now will EVOKED firstFunction so that secondFunction will have the response
firstFunction().then(function (data) {
  // console.log((secondFunction(data))); // Prints {Promise"Success YAY!"}
  return secondFunction(data);
}).then(function (data) {
  console.log(data);
});