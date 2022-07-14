// Write a function which accepts and array of integers and a number called n. the function should calculate the maximum sum of n consecutive elements in the array

function maxSumSubarray(arr, n) {
    if(n > arr.length) return null;

    let maxSum = 0;
    let tempSum = 0;

    for(let i = 0; i < n; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for(let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

function maxSumSubArray2(arr, n) {
    if(n > arr.length) return null;

    let maxSum = 0;
    let tempSum = 0;

    for(let i = 0; i < arr.length; i++) {
        tempSum += arr[i];

        if(i >= n - 1) {
            maxSum = Math.max(maxSum, tempSum);
            tempSum -= arr[i - (n - 1)];
        }
    }

    return maxSum
}