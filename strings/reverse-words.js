//  Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place.

function reverseWords(strArray) {
  let i = 0;
  let j = strArray.length - 1;

  while (i < strArray.length) {
    let temp = strArray[i];
    strArray[i] = strArray[j];
    strArray[j] = temp;
    i++;
    j--;
  }

  strArray = strArray.join('').split(' ');
  i = 0;
  j = strArray.length - 1;

  while (i < strArray.length) {
    temp = strArray[i];
    strArray[i] = strArray[j];
    strArray[j] = temp;
    if (i === j) break;
    i++;
    j--;
  }

  return strArray.join(' ');
}

const message = [
  'c',
  'a',
  'k',
  'e',
  ' ',
  'p',
  'o',
  'u',
  'n',
  'd',
  ' ',
  's',
  't',
  'e',
  'a',
  'l',
];

reverseWords(message);
