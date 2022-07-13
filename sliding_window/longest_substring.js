// Write a function which accepts a string and returns the length of the longest substring with all unique characters


function findLongestSubstring(str) {
    let longest = 0;
    const seen = {};
    let start = 0;
    
    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        
        if(seen[char]) {
            start = Math.max(start, seen[char]);
         }
        
        longest = Math.max(longest, i - start + 1);
        
        seen[char] = i + 1;
    }
    
    return longest;
}

function findLongestSubstring2(str) {
    if(str === null || str.length === 0) return 0;
    
    let max = 0;
    let set = new Set();
    let i = 0;
    let j = 0;

    while(i < str.length) {
        const char = str[i];

        // The inner while loop will only iterate once through every char of the string. It does not keep looping for every iteration of the outer loop. Hence it is O(2N). 
        while(set.has(char)) {
            set.delete(str[j]);
            j++;
        }

        set.add(char);
        max = Math.max(max, i - j + 1);
        i++;

    }

    return max;
}