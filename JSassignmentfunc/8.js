console.log(isCaseInsesitivePalindrome('Aba')); // Output: true
console.log(isCaseInsesitivePalindrome('Racecar')); // Output: true
console.log(isCaseInsesitivePalindrome('Palindrome')); // Output: false
console.log(isCaseInsesitivePalindrome('Madam')); // Output: true
console.log(isCaseInsesitivePalindrome('Hello')); // Output: false

function isCaseInsensitivePalindrome(str) {
    const lowerCaseStr = str.toLowerCase();
    const reversedStr = lowerCaseStr.split('').reverse().join('');
    return lowerCaseStr === reversedStr;
  }