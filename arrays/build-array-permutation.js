// Build an array from permutation

// Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

// Using the value we're currently iterating with and using it as an index to get the value that's at that index of the array we're iterating over and putting that value in the new array

// Example 1

// Input: nums = [0,2,1,5,3,4]
// Output: [0,1,2,4,5,3]
// Explanation: The array ans is built as follows: 
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]] = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]] = [0,1,2,4,5,3]

// Example 2

// Input: nums = [5,0,1,2,3,4]
// Output: [4,5,0,1,2,3]
// Explanation: The array ans is built as follows:
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]] = [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]] = [4,5,0,1,2,3]

var buildArray = function(nums) {
    let ans = [];
    
    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[nums[i]];
    }
    
    return ans;
    
};


var buildArray2 = function(nums) {
    return nums.map(a=>nums[a]);
};


var buildArray3 = function(A) {
    let B = [];
    A.forEach((_, i) => {
        B.push(A[A[i]])
    });
    return B;
};