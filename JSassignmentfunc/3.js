function longestPalindromicSubtracting(s){
        let longest = '';
      
        for (let i = 0; i < s.length; i++) {
          let oddLength = expandAroundCenter(s, i, i);
          let evenLength = expandAroundCenter(s, i, i + 1);
          let maxLength = oddLength.length > evenLength.length ? oddLength : evenLength;
      
          if (maxLength.length > longest.length) {
            longest = maxLength;
          }
        }
      
        return longest;
      
        function expandAroundCenter(s, left, right) {
          while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
          }
      
          return s.slice(left + 1, right);
        }
      }

//Test cases
console.log(longestPalindromicSubtracting("babad")); // Output: "bab" "aba"
console.log(longestPalindromicSubtracting("cbbd")); // Output: "bb"