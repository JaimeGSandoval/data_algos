// Write a function which accepts a sorted array of integers. The function should find the first two pair where the sum is zero. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

function sumZero(arr) {
    const left = 0;
    const right = arr.length - 1;
    
    while(left < right) {
      let sum = arr[left] + arr[right];
      if(sum === 0) {
        return [arr[left], arr[right]];
      } else if(sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }