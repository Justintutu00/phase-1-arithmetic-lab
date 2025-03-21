const { multiply, random, mod, max } = require('../index'); // Import variables from index.js
const chai = require('chai');
const expect = chai.expect;

describe('index.js', function() {
  describe('multiply', function() {
    it("is an equation whose multiplied results will equal 62", function() {
      expect(multiply).to.eq(62); // Ensure multiply equals 62 ✅
    });
  });

  describe('random', function() {
    it("generates a random integer greater than 0", function() {
      expect(Number.isInteger(random)).to.be.true; // Ensure it's an integer ✅
      expect(random).to.be.greaterThan(0); // Ensure it's greater than 0 ✅
    });
  });

  describe('mod', function() {
    it("is an equation that calculates a remainder that is equal to 4", function() {
      expect(mod).to.eq(4); // Ensure mod equals 4 ✅
    });
  });

  describe('max', function() {
    it("will return 20 as the highest number in the set", function() {
      expect(max).to.eq(20); // Ensure max equals 20 ✅
    });
  });
});
