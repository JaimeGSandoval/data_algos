// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// Example 1:

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]

// Example 2:

// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]

// my solution
function smallerNumbersThanCurrent(nums) {
  let j = 0;
  let i = 1;
  let total = 0;
  let result = [];

  while (j < nums.length) {
    if (i === nums.length) i = 0;

    if (i === j) {
      result.push(total);
      total = 0;
      i = j + 1;
      j++;
    }

    if (nums[j] > nums[i]) {
      total += 1;
    }

    i++;
  }

  return result;
}

function smallerNumbersThanCurrent2(nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  return nums.map((num) => sorted.indexOf(num));
}

// explanation for last example
// nums [8,1,2,2,3]

// 1. Sort nums by descending order
// sorted [8,3,2,2,1]

// 2. Create map with counts
//  map:
// {
//   8 : 4,
//   3 : 3,
//   2 : 1,
//   1 : 0
// }

// 3. Return an array with counts stored in map
// result: [4,0,1,1,3]

function smallerNumbersThanCurrent3(nums) {
  // 1.
  const sorted = Array.from(nums).sort((n1, n2) => n2 - n1);

  // 2.
  const map = new Map(
    sorted.map((num, index) => [num, nums.length - index - 1])
  );

  // 3.
  return nums.map((num) => map.get(num));
}
