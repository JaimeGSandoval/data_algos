// Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// find the smallest sub array that's equal to or greater than the target
// input : a target integer
// output : an integer that represents the smallest sub array that's >= than the target. If none, return zero

// if empty input, return 0

// variables: sum, minLength, two pointers windowStart and windowEnd

// dynamic sliding window

// set minLength to Infinity
// set windowEnd to 0
// set windowStart to 0
// set sum to 0


// while windowStart < nums.length

//  condition : if sum is less than target 
//     - sum += current iteration value
//     - increment windowEnd index

// condition: if sum >= target
//     - minLength = Math.min(minLength, windowEnd - windowStart)
//     - remove the value index windowStart from sum
//.    - increment windowStart

// return minLength

var minSubArrayLen = function(target, nums) {
    if(nums === null || nums.length === 0) return 0;
    
    let minLength = Infinity;
    let windowStart = 0;
    let windowEnd = 0;
    let sum = 0;
    
    while(windowStart < nums.length) {
        let num = nums[windowEnd];
        
        if (sum < target) {
            sum += num;
            windowEnd++;
        } else if (sum >= target) {
            minLength = Math.min(minLength, windowEnd - windowStart);
            sum -= nums[windowStart]; // remove value to see if we can still stay >= to target without it and find a smaller sub array length
            windowStart++; // shorten window
        } else {
            break;
        }
    }
    
    
    
    return minLength === Infinity ? 0 : minLength;
};


function minSubArrayLen2(arr, targetSum) {
    let windowStart = 0;
    let minWindowSize = Infinity;
    let currentWindowSum = 0;

    for(let windowEnd = 0; windowEnd < arr.length; i++) {
        currentWindowSum += arr[i];

        while(currentWindowSum >= targetSum) {
            minWindowSize = Math.min(minWindowSize, windowEnd - windowStart + 1); // the plus 1 is to offset because index starts at zero
            currentWindowSum -= arr[windowStart];
            windowStart++;
        } 
    }

    return minWindowSize;
}









