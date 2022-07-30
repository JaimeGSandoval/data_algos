// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.

// Example 1:

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true]

// Example 2:

// Input: candies = [4,2,1,1,2], extraCandies = 1
// Output: [true,false,false,false,false]

// Example 3:

// Input: candies = [12,1,12], extraCandies = 10
// Output: [true,false,true]

// my solution
function kidsWithCandies(candies, extraCandies) {
  const result = [];
  const sorted = [...candies].sort((a, b) => a - b);

  for (let i = 0; i < candies.length; i++) {
    let withExtraCandies = candies[i] + extraCandies;

    if (withExtraCandies >= sorted[sorted.length - 1]) result.push(true);
    else result.push(false);
  }

  return result;
}

const kidsWithCandies2 = (candies, extraCandies) => {
  const ret = [];
  let max = 0;

  for (const val of candies) {
    val > max && (max = val);
  }

  for (let i = 0; i < candies.length; i++) {
    ret.push(candies[i] + extraCandies >= max);
  }

  return ret;
};

const kidsWithCandies3 = (candies, extraCandies) => {
  const max = Math.max(...candies);

  return candies.map((candy) => candy + extraCandies >= max);
};

const kidsWithCandies4 = (candies, extraCandies, max = Math.max(...candies)) =>
  candies.map((candy) => candy + extraCandies >= max);
