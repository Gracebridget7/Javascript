function areAnagrams(str1, str2) {
        if (str1.length !== str2.length) {
          return false;
        }
      
        const countMap1 = {};
        const countMap2 = {};
      
        for (let i = 0; i < str1.length; i++) {
          const char1 = str1[i];
          const char2 = str2[i];
      
          if (!countMap1[char1]) {
            countMap1[char1] = 1;
          } else {
            countMap1[char1]++;
          }
      
          if (!countMap2[char2]) {
            countMap2[char2] = 1;
          } else {
            countMap2[char2]++;
          }
        }
      
        for (const key in countMap1) {
          if (countMap1[key] !== countMap2[key]) {
            return false;
          }
        }
      
        return true;
      }



//Test Cases
console.log(areAnagrams("listen", "silent")); // Expected output: true
console.log(areAnagrams ("hello", "world")); // Expected output: false

