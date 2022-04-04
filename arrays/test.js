const arr1 = ['a', 'b', 'c', 'x'];
const arr2 = ['z', 'y', 'd', 'y'];

function doesHaveOneInCommon(arr1, arr2) {
  // for (let i = 0; i < arr2.length; i++) {
  //   if (arr1.includes(arr2[i])) {
  //     return true;
  //   }
  // }

  return arr1.some((item) => arr2.includes(arr1[item]));
}

console.log(doesHaveOneInCommon(arr1, arr2));

function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

//O(m * n)
//O(1) - Space Complexity

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

function containsCommonItem2(arr1, arr2) {
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

function containsCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

containsCommonItem(array1, array2);
containsCommonItem2(array1, array2);
containsCommonItem3(array1, array2);
