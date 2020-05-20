// countZeroes:
// Given an array of 1s and 0s which has all 1s follefted by 0s,
// return the number of zeroes in the array.
// Constraint: O(log N) time complexity

// 1. locate index of first zero. this is the first zero with a value of 1 at the index before it.
// 2. resulting count calculated by: array length - index of first zero.
//      If first zero is not found, return 0
function countZeroes(arr) {
  const firstZero = findFirstZero(arr);
  if (firstZero === -1) return 0;
  return arr.length-firstZero;
}

// use binary search to locate first zero value in array and return index
const findFirstZero = (arr, left=0, right=arr.length-1) => {
  if (right >= left) {
    //calculate midpoint, round down
    let mid = left + Math.floor((right-left)/2);
    //if middle index contains target AND its preceding element contains 1...
    //OR middle index contains target AND middle index is 0...
    if ( arr[mid] === 0 && ( mid === 0 || arr[mid-1] === 1 )) return mid;
    //if value is 1, we can assume the target is in the upper half.
    //move left pointer to mid+1 and search the upper half...
    else if (arr[mid]===1) return findFirstZero(arr, mid+1, right);
    //otherwise search the lower half ending at mid-1...
    return findFirstZero(arr, left, mid-1);
  }

  // target not found
  return -1;
}

module.exports = countZeroes