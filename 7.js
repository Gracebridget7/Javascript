console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // Output: 'fl'
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // Output: ''
console.log(longestCommonPrefix(['interspecies', 'interstellar', 'interstate'])); // Output: 
console.log(longestCommonPrefix(['prefix', 'preixes','preform'])); // Output: 'pre'
console.log(longestCommonPrefix(['apple', 'banana', 'cherry'])); // Output: ''

function longestCommonPrefix(strs) {
    if (!strs.length) return '';
  
    let prefix = '';
    for (let i = 0; i < strs[0].length; i++) {
      const char = strs[0][i];
      for (let j = 1; j < strs.length; j++) {
        if (strs[j][i] !== char) return prefix;
      }
      prefix += char;
    }
  
    return prefix;
  }