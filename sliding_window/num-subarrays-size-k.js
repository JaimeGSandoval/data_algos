// Given an array of integers arr and two integers k and threshold, return the number of sub-arrays of size k and average greater than or equal to threshold.

// Example 1:

// Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
// Output: 3
// Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).

// Example 2:

// Input: arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5
// Output: 6
// Explanation: The first 6 sub-arrays of size 3 have averages greater than 5. Note that averages are not integers.

var numOfSubarrays = function (arr, k, target) {
  if (arr.length < k) return 0;

  let total = 0;
  let left = 0;
  let right = k;

  let sum = arr.slice(left, right).reduce((acc, curr) => acc + curr, 0);

  while (right <= arr.length) {
    if (left > 0) {
      sum -= arr[left - 1];
      sum += arr[right - 1];
    }

    if (sum / k >= target) total++;

    left++;
    right++;
  }

  return total;
};
