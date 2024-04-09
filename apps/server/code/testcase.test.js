const { twoSum } = require('./code');

describe('twoSum', () => {
  test('Example 1', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });

  test('Example 2', () => {
    const nums = [3, 2, 4];
    const target = 6;
    expect(twoSum(nums, target)).toEqual([1, 2]);
  });

  test('Example 3', () => {
    const nums = [3, 3];
    const target = 6;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });

  test('No solution', () => {
    const nums = [1, 2, 3, 4, 5];
    const target = 20;
    expect(() => twoSum(nums, target)).toThrowError('No two sum solution');
  });
});
