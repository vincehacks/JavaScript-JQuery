// Created by Vince Chang

define([],function(){

  const Car = function(name) {
    // Private var
    let gas = 100;

    // Private method
    const useGas = (amount) => {
      gas -= amount;
    }

    // Public methods
    this.drive = (distance) =>{
      useGas(distance/5);
    }
    this.getGasLevel = () => {
      return gas;
    }
  }

  return Car;
});