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

// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

const sumStr = (a,b) => (Number(a) + Number(b)).toString();

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// non-negative integer arg
// return its digits in descending order

const descendingOrder = (num) => Number(num.toString().split('').sort((a, b) => b - a).join(''));

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let count = 0;

  const vowelsObj = {
    a: 'a',
    e: 'e',
    i: 'i',
    o: 'o',
    u: 'u'
  }
  
  for (const char of str) {
    if (vowelsObj[char]) count++;
  }

  return count;
}

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from a to z.


function printerError(s) {
  return `${s.replace(/[a-m]/ig, '').length}/${s.length}`;
}

function printerError(s) {
  const colorCodes = 'abcdefghijklm';
  let totalErrors = 0;

  for (char of s) {
    if (!colorCodes.includes(char.toLowerCase())) totalErrors++;
  }

  return `${totalErrors}/${s.length}`;
}


// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


function longest(s1, s2) {
  let str = new Set([...s1, ...s2]);
  return [...str].sort().join('');
  }


// Simple, given a string of words, return the length of the shortest word(s). String will never be empty and you do not need to account for different data types.

function findShort(s){
  let shortest = Infinity;

  s.split(' ').forEach((word) => {
    if (word.length < shortest) {
      shortest = word.length;
    }
  });

  return shortest;
}

function findShort(s) {
  return s.split(' ').reduce((min, word) => Math.min(min, word.length), Infinity);
}

function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

function isIsogram(str){
  const letters = {};

  str.split('').forEach(char => {
    const lowerChar = char.toLowerCase();
    letters[lowerChar] = (letters[lowerChar] || 0) + 1;
  });

  for (const key in letters) {
    if (letters[key] > 1) return false;
  }

  return true;
}

function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna) {
  let result = '';
  
  const DNA = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  }

  for (let i = 0; i < dna.length; i++) {
      result += DNA[dna[i]];
}

  return result;
}

function DNAStrand(dna) {
  const compliments = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  }
  
  return dna.replace(/./g, char => compliments[char]);
}

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
  const sorted = numbers.split(' ').sort((a, b) => a - b);
  return `${sorted[sorted.length - 1]} ${sorted[0]}`;
}

function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

function friend(friends){
  return friends.filter((friend) => {
    if (friend.length === 4) return friend;
  })
}

function friend(friends){
  return friends.filter(friend => friend.length === 4)
}
