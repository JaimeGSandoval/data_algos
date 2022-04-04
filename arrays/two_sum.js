// Brute force O(n^2)
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// O(n)
const twoSum2 = function (nums, target) {
  const complements = {};
  for (let i = 0; i < nums.length; i++) {
    if (complements[nums[i]]) {
      return [complements[nums[i]], i];
    }
    complements[target - nums[i]] = i;
  }
};

twoSum2([15, 11, 7, 2], 9);
