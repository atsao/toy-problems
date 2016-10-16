var { spanComplement, tokens } = require('../spanComplement');
var assert = require('chai').assert;

describe("spanComplement", function() {
  it("returns length when there's no match", function() {
    assert.deepEqual(spanComplement("monkey", "abc"), 6);
  });
  
  it("returns a value in the middle", function() {
    assert.deepEqual(spanComplement("monkey", "abck"), 3);
  });
  
  it("doesn't care about punctuation", function() {
    assert.deepEqual(spanComplement("cat-dog", "oxi"), 5);
  });
  
  it("returns value at beginning", function() {
    assert.deepEqual(spanComplement("monkey", "kmy"), 0);
  });
  
  it("returns null if str is empty", function() {
    assert.deepEqual(spanComplement("", "abc"), null);
  });
});

  describe("tokens", function() {
  it("splits properly on single delimiters", function() {
    assert.deepEqual(tokens("cat,dog-mouse,house", ";.,-"), ["cat", "dog", "mouse", "house"]);
  });
  
  it("skips over multiple delimiters", function() {
    assert.deepEqual(tokens(".....armadillo---,kangaroo...,--", ";.,-"), ["armadillo", "kangaroo"]);
  });
});

