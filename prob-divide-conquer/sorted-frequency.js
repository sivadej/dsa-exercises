// sortedFrequency:
// Given a sorted array and number, count number of occurences of 
// the number in the array
// Constraint: Time complexity O(log N)

// use binary searches to find indices of first and last
// occurrence of target value
// frequency is calculated by last index - first index + 1

const sortedFrequency = (nums, target) => {
  let firstIdx = findFirst(nums, target);
  if (firstIdx === -1) return firstIdx;
  let lastIdx = findFirst(nums, target);
  return lastIdx - firstIdx + 1;
}

const findFirst = (arr, val, low=0, high=arr.length-1) => {
  return -1;
}

const findLast = (arr, val, low=0, high=arr.length-1) => {
  return -1;
}

module.exports = sortedFrequency