/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const length = nums.length;
  let hash = new Map();
  let index = 0;
  for (index = 0; index < length; index++) {
    hash.set(nums[index], index);
  }
  let numToFind;
  for( index = 0; index < length; index++) {
    numToFind = target - nums[index];
    if (hash.has(numToFind) && index !== hash.get(numToFind)) {
      return [index, hash.get(numToFind)];
    }
  }
};
