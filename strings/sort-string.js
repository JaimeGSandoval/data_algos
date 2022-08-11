// Given a string of lowercase characters from ‘a’ – ‘z’. We need to write a program to print the characters of this string in sorted order.

let MAX_CHAR = 26;

function sortString(str) {
  let result = '';
  // Hash array to keep count of characters.
  // Initially count of all characters is
  // initialized to zero.
  let charCount = new Array(MAX_CHAR); // each index represents a character in ASCII from 97 - 122 (which are all the lowercase characters in the alphabet)
  charCount.fill(0);

  // Traverse string and increment
  // count of characters
  for (let i = 0; i < str.length; i++) {
    // 'a'-'a' will be 0, 'b'-'a' will be 1,
    // the result of str[i].charCodeAt() - "a".charCodeAt() will be the index which is stored in the charCode array. The index  will be used to determine the ascii value of the character when traversed below
    charCount[str[i].charCodeAt() - 'a'.charCodeAt()]++;
  }

  // Traverse the hash array and print characters
  for (let i = 0; i < MAX_CHAR; i++) {
    for (let j = 0; j < charCount[i]; j++) {
      // use 'a'.charCodeAt + i because i will point to an index. at that index will be a character. Its index position relates to it value in ascii. Since "a" equals 97 in ascii, adding i to 97 will gives us the ascii value of the character at the index of i
      result += String.fromCharCode('a'.charCodeAt() + i);
    }
  }

  return result;
}

let s = 'chidori';
sortString(s);
