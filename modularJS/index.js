// Created by Vince Chang
// Using this index.js code to be dependent on car.js
// Whatever I import into Car is coming from car.js]

requirejs(["car.js"], function(Car) {
  console.log(new Car("buzz buzz"));
});
