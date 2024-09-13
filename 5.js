function removeDuplicates(s) {
    const seen = {};
    let result = '';
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      if (!seen[char]) {
        seen[char] = true;
        result += char;
      }
    }
  
    return result;
  }


//Testcases
console.log(removeDuplicates('programming')); // Output: 'progamin'
console.log(removeDuplicates('hello world')); // Output: 'helo wrld'
console.log(removeDuplicates('aaaaa')); // Output: 'a'
console.log(removeDuplicates('abcd')); // Output: 'abcd'
console.log(removeDuplicates('aabbcc')); // Output: 'abc'