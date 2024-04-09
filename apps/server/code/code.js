/**
 * Returns the indices of two numbers in the array that add up to the target.
 * @param {number[]} nums - The array of integers.
 * @param {number} target - The target sum.
 * @return {number[]} - Indices of the two numbers such that they add up to target.
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  throw new Error('No two sum solution');
};

module.exports = twoSum;

