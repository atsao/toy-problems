const spiralTraversal = require('./spiralTraversal');
const assert = require('chai').assert;

describe('spiralTraversal', () => {
  it('is a function', (done) => {
    assert.isFunction(spiralTraversal);
    done();
  });

  it('returns an array', (done) => {
    assert.isArray(spiralTraversal([1]));
    done();
  });

  it('flattens a 2D array', (done) => {
    let sample = [[1, 2], [4, 3]];
    assert.deepEqual(spiralTraversal(sample), [1, 2, 3, 4]);
    done();
  });

  it('traverses a 3x3 2D array', (done) => {
    let sample = [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5]
    ];
    assert.deepEqual(spiralTraversal(sample), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    done();
  });

  it('traverses a 3x5 2D array', (done) => {
    let sample = [
      [1, 2, 3, 4, 5],
      [12, 13, 14, 15, 6],
      [11, 10, 9, 8, 7]
    ];
    assert.deepEqual(spiralTraversal(sample), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    done();
  });

  it('traverses a 4x5 2D array', (done) => {
    let sample = [
      [0, 1, 2, 3, 4],
      [13, 14, 15, 16, 5],
      [12, 19, 18, 17, 6],
      [11, 10, 9, 8, 7]
    ];
    assert.deepEqual(spiralTraversal(sample), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
    done();
  });

  /*
  let test3 =
  */
});
