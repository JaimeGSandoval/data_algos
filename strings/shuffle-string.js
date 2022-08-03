// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

// Example 1:

// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

function restoreString(str, indices) {
  let output = [];

  for (let i = 0; i < str.length; i++) {
    output[indices[i]] = str[i];
  }

  return output.join("");
}

const restoreString2 = (str, indices) =>
  str
    .split("")
    .reduce((acc, curr, i) => {
      acc[indices[i]] = curr;
      return acc;
    }, [])
    .join("");
