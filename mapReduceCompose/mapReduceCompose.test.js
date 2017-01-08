var { map,
  mapWith,
  reduce,
  reduceWith,
  compose,
  add,
  square,
  friendlyGreeting,
  sayName,
  longestWordLength} = require('./mapReduceCompose');
var assert = require('chai').assert;

describe("map and mapWith", function() {
  var coll;

  beforeEach(function() {
    coll = [1, 2, 3, 4, 5];
  });

  describe("map", function() {
    it("is a function", function() {
      assert.isFunction(map);
    });

    it("returns an array", function() {
      assert.isArray(map(square, coll));
    });

    it("returns new array with results of callback passed in", function() {
      assert.deepEqual(map(square, coll), [1, 4, 9, 16, 25]);
    });
  });

  describe("mapWith", function() {
    it("is a function", function() {
      assert.isFunction(mapWith);
    });

    it("returns a function", function() {
      assert.isFunction(mapWith(square));
    });
  });
});
