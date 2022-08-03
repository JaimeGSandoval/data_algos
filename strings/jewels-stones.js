//You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0

var numJewelsInStones1 = function (jewels, stones) {
  let result = 0;
  const set = new Set(jewels);

  for (const char of stones) {
    if (set.has(char)) result++;
  }

  return result;
};

function numJewelsInStones2(jewels, stones) {
  const hash = {};
  let result = 0;

  for (let i = 0; i < jewels.length; i++) {
    const char = jewels[i];
    hash[char] = true;
  }

  for (let i = 0; i < stones.length; i++) {
    const char = stones[i];
    if (hash[char]) result++;
  }

  return result;
}

const numJewelsInStones3 = (J, S) => {
  const jewels = new Set(J);
  return S.split("").reduce((res, s) => res + jewels.has(s), 0);
};

function numJewelsInStones4(jewels, stones) {
  const result = stones.split("").filter((stone) => jewels.includes(stone));
  return result.length;
}

var numJewelsInStones5 = function (jewels, stones) {
  const REGEX = new RegExp(`[${jewels}]`, "g");

  return stones.match(REGEX) ? stones.match(REGEX).length : 0;
};
