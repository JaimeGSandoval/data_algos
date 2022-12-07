// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name) {
  const words = name.split(' ');
  return `${words[0][0].toUpperCase()}.${words[1][0].toUpperCase()}`;
}

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

function greet(name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest';
}

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num) {
  let result = '';

  for (let i = 1; i <= num; i++) {
    result += `${i} sheep...`;
  }

  return result;
};

// Complete the solution so that it reverses the string passed into it.

function solution(str) {
  let result = '';

  for (let char of str) {
    result = char + result;
  }

  return result;
}

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
  return name[0] === 'R' || name[0] === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;
}

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:

// The first argument can be an empty string
// The second string argument will always be of length 1

function strCount(str, letter) {
  let count = 0;

  for (let char of str) {
    if (char === letter) count++;
  }

  return count;
}

// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

function booleanToString(b) {
  return b ? 'true' : 'false';
}

// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
  return x.replace(/\s/g, '');
}
