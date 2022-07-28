// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed

// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good

// Example 3:

// Input: nums = [1,2,3]
// Output: 0

function numIdenticalPairs(nums) {
  if (nums === null || nums.length <= 1) return 0;

  let total = 0;
  let i = 0;
  let j = 1;

  while (i < nums.length) {
    while (j < nums.length) {
      if (nums[i] === nums[j] && i < j) total++;
      j++;
    }

    i++;
    j = i + 1;
  }

  return total;
}

// with using a map, you're keeping track of how many instances of the number you've seen, because any time you see it again, you know it'll pair up with all the ones you've seen before.
function numIdenticalPairs2(nums) {
  const map = {};
  let count = 0;

  for (const number of nums) {
    if (map[number]) {
      count += map[number];
      map[number] += 1;
    } else {
      map[number] = 1;
    }
  }
  return count;
}
