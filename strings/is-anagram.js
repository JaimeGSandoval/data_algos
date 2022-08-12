// Given two strings, write a function to determine whether they are anagrams.

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const string1 = str1.toLowerCase();
  const string2 = str2.toLowerCase();
  const maxChar = 26;

  const charCount = new Array(maxChar);
  charCount.fill(0);

  for (let i = 0; i < string1.length; i++) {
    charCount[string1[i].charCodeAt() - 'a'.charCodeAt()]++;
  }

  for (let j = 0; j < string2.length; j++) {
    charCount[string2[j].charCodeAt() - 'a'.charCodeAt()]--;
  }

  for (let k = 0; k < charCount.length; k++) {
    if (charCount[k] !== 0) return false;
  }

  return true;
}

console.log(isAnagram('racecaRd', 'racecaR'));

const ascii = new Array(256);

ascii.fill(0);

ascii['a'.charCodeAt()]++;
ascii['b'.charCodeAt()]++;
ascii['b'.charCodeAt()]++;
ascii['b'.charCodeAt()]++;

console.log(ascii[98]);
