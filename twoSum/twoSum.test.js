const twoSum = require('./twoSum');
const assert = require('chai').assert;

describe('twoSum', () => {
  it('returns an empty array when there are numbers that add up to a target', () => {
    const nums = [4, 8, 3, 9];
    const target = 10;

    assert.deepEqual(twoSum(nums, target), []);
  });

  it('returns indices of numbers that add up to a specified target', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;

    assert.deepEqual(twoSum(nums, target), [0, 1]);
  });

  it ('handles negative numbers', () => {
    const nums = [-1, 8, 4, 12];
    const target = 7;

    assert.deepEqual(twoSum(nums, target), [0, 1]);
  });
})
