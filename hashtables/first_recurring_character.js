function firstRecurring(arr) {
    const hash = {};
    
    for(let i = 0; i < arr.length; i++) {
      const char = arr[i];
      if(hash[char] !== undefined) return char;
      hash[char] = 1;
    }
    
    return 'No repeating characters';
  }