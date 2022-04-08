// Given an array of numbers, return the first recurring number
// [2, 5, 1, 2, 3, 5, 1, 2, 4] Should return 2
// [2, 1, 1, 2, 3, 5, 1, 2, 4] Should return 1
// [2, 3, 4, 5] Should return undefined

// Key points:
// Input will be an array of numbers
// Output will be the recurring number

// Steps
// - check if the input is an array
// - create a hash table
// - Loop through array and first check if the hash table has the number stored in it already. If it is stored, return the number, else store the number
// Return the recurring number if there is one, ele return undefined

// Brute force O(n^2)
const firstRecurringNumber = (numberArray) => {
  for (let i = 1; i < numberArray.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (numberArray[i] === numberArray[j]) {
        console.log(numberArray[i]);
        return numberArray[i];
      }
    }
  }
  return undefined;
};

firstRecurringNumber([2, 5, 1, 2, 3, 5, 1, 2, 4]);
firstRecurringNumber([2, 5, 5, 2, 3, 5, 1, 2, 4]);
firstRecurringNumber([2, 1, 1, 2, 3, 5, 1, 2, 4]);
firstRecurringNumber([2, 3, 4, 5]);

// Using hashtable O(n)
const firstRecurringNumber2 = (numberArray) => {
  if (!Array.isArray(numberArray)) {
    console.error(
      'Input is missing or invalid entry. Input must be an array of numbers.'
    );
    return;
  }
  const hashtable = {};

  for (let num of numberArray) {
    if (hashtable[num]) {
      return num;
    }
    hashtable[num] = num;
  }
  return undefined;
};

firstRecurringNumber2([2, 5, 1, 2, 3, 5, 1, 2, 4]);
firstRecurringNumber2([2, 5, 5, 2, 3, 5, 1, 2, 4]);
firstRecurringNumber2([2, 1, 1, 2, 3, 5, 1, 2, 4]);
firstRecurringNumber2([2, 3, 4, 5]);
