function filterAndSort(filterFn, ...numbers){
        // Use the rest operator to capture all arguments except the first one (filterFn)
        const filteredNumbers = numbers.filter(filterFn);
        const isEven = (num) => num % 2 === 0;
console.log(filterAndSort(isEven, 5, 3, 8, 6, 2)); // Output: [2, 6, 8]
        // Sort the filtered numbers in ascending order
        return filteredNumbers.sort((a, b) => a - b);
      }

// Test Case
//const isEven = (num) => num % 2 === 0;
console.log(filterAndSort(isEven,5,3,8,6,2)); // Output: [2,6,8]                                                                                                                                                                                     