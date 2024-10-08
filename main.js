// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]





//Solution
function removeEveryOther(arr){
    return arr.filter((_, i) => i % 2 === 0)
  }
  
  
  
  // Example usage:
  // const originalArray = [1, 2, 3, 4, 5, 6];
  // const modifiedArray = removeEverySecond(originalArray);
  // console.log(modifiedArray); // Output: [1, 3, 5]