// Given a string of lowercase characters from ‘a’ – ‘z’. We need to write a program to print the characters of this string in sorted order.

let MAX_CHAR = 26;

// function to print string in sorted order
function sortString(str) {
  // Hash array to keep count of characters.
  // Initially count of all characters is
  // initialized to zero.
  let charCount = new Array(MAX_CHAR);
  charCount.fill(0);

  // Traverse string and increment
  // count of characters
  for (let i = 0; i < str.length; i++) {
    // 'a'-'a' will be 0, 'b'-'a' will be 1,
    // so for location of character in count
    // array we will do str[i]-'a'.
    charCount[str[i].charCodeAt() - "a".charCodeAt()]++;
  }

  // Traverse the hash array and print
  // characters
  for (let i = 0; i < MAX_CHAR; i++) {
    for (let j = 0; j < charCount[i]; j++) {
      document.write(String.fromCharCode("a".charCodeAt() + i));
    }
  }
}

let s = "chidori";
sortString(s);
