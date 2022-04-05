// Create a function that transforms any positive number to a string representing the number in words. The function should work for all numbers between 0 and 999999.

// number2words(1)  ==>  "one"
// number2words(21)  ==>  "twenty-one"
// number2words(950)  ==>  "nine hundred fifty"
// number2words(3051)  ==>  "three thousand fifty-one"
// number2words(99999)  ==>  "ninety-nine thousand nine hundred ninety-nine"
// number2words(888888)  ==>  "eight hundred eighty-eight thousand eight hundred eighty-eight"

function number2words(n) {
  // works for numbers between 0 and 999999
  var b = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  var b2 = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  if (n >= 0 && n < 20) {
    return b[n];
  }
  if (n >= 20 && n < 100) {
    return b2[Math.floor(n / 10) - 2] + (n % 10 === 0 ? '' : '-' + b[n % 10]);
  }
  if (n >= 100 && n < 1000) {
    return (
      b[Math.floor(n / 100)] +
      ' hundred' +
      (n % 100 === 0 ? '' : ' ' + number2words(n % 100))
    );
  } else {
    return (
      number2words(Math.floor(n / 1000)) +
      ' thousand' +
      (n % 1000 === 0 ? '' : ' ' + number2words(n % 1000))
    );
  }
}
