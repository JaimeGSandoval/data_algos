// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// You are given an array of strings sentences, where each sentences[i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence.

// Example 1:

// Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// Output: 6

// Example 2:

// Input: sentences = ["please wait", "continue to fight", "continue to win"]
// Output: 3

var mostWordsFound = function (sentences) {
  if (sentences === null || sentences.length === 0) return 0;
  if (sentences.length === 1) return sentences[0].split(" ").length;

  let maxWords = Math.max(
    sentences[0].split(" ").length,
    sentences[1].split(" ").length
  );

  for (let i = 2; i < sentences.length; i++) {
    maxWords = Math.max(maxWords, sentences[i].split(" ").length);
  }

  return maxWords;
};

var mostWordsFound2 = function (sentences) {
  if (sentences === null || sentences.length === 0) return 0;
  if (sentences.length === 1) return sentences[0].split(" ").length;

  let maxWords = Math.max(
    sentences[0].split(" ").length,
    sentences[1].split(" ").length
  );

  sentences.forEach((word, i, arr) => {
    maxWords = Math.max(maxWords, arr[i].split(" ").length);
  });

  return maxWords;
};
