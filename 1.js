function isPalindrome(str) {
  // Remove spaces, punctuation, and convert to lowercase
  let cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').split('').reverse().join('');

  // Compare the cleaned string with its reverse
  if(str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '') === cleanedStr){
    return true

  } else{
    return false
  }  
}

//test cases
console.log(isPalindrome('A man, a plan, a canal, Panama')); // true
console.log(isPalindrome('Was it a car or a cat i saw')); // false
console.log(isPalindrome('Hello, World!'));//false