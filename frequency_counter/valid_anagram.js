// Given two strings, write a function to determine if the second string is an anagram

function validAnagram(str1, str2) {
    if(str1.length !== str2.length) return false;
    const lookUp = {};
    
    for(let i = 0; i < str1.length; i++) {
      const char = str1[i];
      lookUp[char] ? lookUp[char] += 1: lookUp[char] = 1;
    }
    
    for(let i = 0; i < str2.length; i++) {
      const char = str2[i]
      if(!lookUp[char]) return false;
      else lookUp[char] -= 1;
    }
    
  
    return true;
  }