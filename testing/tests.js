// Created by Vince Chang
// Jasmine Testing Framework
// This is the equivalent of suite.js

const multBy2 = require('./multBy2.js');

describe("multBy2", function () {
  it("Should multiply a value by 2", function () {
    expect(multBy2(2)).toBe(4);
  });
});

// end of test
