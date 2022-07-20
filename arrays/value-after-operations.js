// Final value of variable after performing operations

// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

// example
// Input: operations = ["--X","X++","X++"]
// Output: 1
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// --X: X is decremented by 1, X =  0 - 1 = -1.
// X++: X is incremented by 1, X = -1 + 1 =  0.
// X++: X is incremented by 1, X =  0 + 1 =  1.

const finalValueAfterOperations = function (operations) {
  if (operations === null || operations.length === 0) return 0;
  let result = 0;

  for (let i = 0; i < operations.length; i++) {
    if (operations[i][1] === "+") result += 1;
    else result -= 1;
  }

  return result;
};

const finalValueAfterOperations2 = function (operations) {
  if (operations === null || operations.length === 0) return 0;
  let result = 0;

  for (let i = 0; i < operations.length; i++) {
    if (operations[i].includes("+")) result += 1;
    else result -= 1;
  }

  return result;
};

const finalValueAfterOperations3 = function (operations) {
  if (operations === null || operations.length === 0) return 0;

  return operations.reduce(
    (acc, curr, i, arr) => (arr[i][1] === "+" ? (acc += 1) : (acc -= 1)),
    0
  );
};
