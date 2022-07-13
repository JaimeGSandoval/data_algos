// Write a function that accepts 2 parameters, an array of positive integers and a positive integer. The function should return the minimal length of a continuous subarray of which the sum is greater or equal to the integer passed to the function. If there isn't one, return 0

function smallestSubarray(arr, targetSum) {
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