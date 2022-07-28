// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

const runningSum = function(nums) {
    if(nums === null || nums.length === 0) return 0;
    let sum = 0;
    return nums.map(n => sum += n);
    
};

const runningSum2 = function(nums) {
    for(let i = 1;i < nums.length; i++){
        nums[i]+=nums[i-1]
    }

    return nums
};

const runningSum3 = nums => {
    nums.reduce((a,c,i,arr) => arr[i] += a)
    return nums
}

var runningSum4 = function(nums) {
    let sum = 0
    for (let i in nums) {
        sum += nums[i]        
        nums[i] = sum
    }
    return nums
};
