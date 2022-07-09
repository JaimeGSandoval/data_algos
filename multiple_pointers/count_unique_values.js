// Implement a function which accepts a sorted array and counts the unique values in the array. 
// There can be negative numbers in the array, but it will always be sorted it t

function countUniqueValues(arr) {
    let result = 0;
    
    for(let i = 0; i < arr.length; i++) {
      let left = i;
      let right = i + 1;
      
      if(arr[left] !== arr[right]) result+=1;
    }
    
    return result; 
  }
  
  countUniqueValues([1,2,2,3,4,5,5]);