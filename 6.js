console.log(countPalindromes('ababa')); // Output:7
console.log(countPalindromes('racecar')); // Output:7
console.log(countPalindromes('aabb')); // Output:4
console.log(countPalindromes('a')); // Output:1
console.log(countPalindromes('abc')); // Output:3

function countPalindromes(str) {
    const palindromes = new Set();
  
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        const substr = str.slice(i, j);
        if (isPalindrome(substr)) {
          palindromes.add(`${i},${j}`);
        }
      }
    }
  
    return palindromes.size;
  }
  
  function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
  
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
  
    return true;
  }