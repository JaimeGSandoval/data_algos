// Given a string s, find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(str) {
  if (str === null || str.length === 0) return 0;

  let max = 0;
  let set = new Set();
  let i = 0;
  let j = 0;

  while (i < str.length) {
    const char = str[i];

    // The inner while loop will only iterate once through every char of the string. It does not keep looping for every iteration of the outer loop. Hence it is O(2N).

    // a critical clue about the time complexity here:  when j advances forward, i does NOT go back to j and start iterating from there.  it stays where it is -- otherwise it would be O(n^2)

    // shrink the window until there is no repeating character i.e. remove all the characters until you reach the repeating character
    while (set.has(char)) {
      set.delete(str[j]);
      j++; // close the window by one
    }

    set.add(char);
    max = Math.max(max, i - j + 1);
    i++; // increase the window by one
  }

  return max;
}
