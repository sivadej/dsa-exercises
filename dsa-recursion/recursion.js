/** product: calculate the product of an array of numbers. */

function count(n=1) {
  if (n>3) return;

  console.log(n);
  console.log(`recursion time, now calling count(${n+1})`)
  count(n+1);
}

function sum(nums) {
  if(nums.length === 0) return 0;
  return nums[0] + sum(nums.slice(1));
}

function product(nums) {
  // base case: when array is empty
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

//[2,3,4]
// product([2,3,4]) ==> 2 * product([3,4])...
// product([3,4])  3 * product([4])...
// product([4])    4 * product([])
// 1 * 4 * 3 * 2 ==> 24


/** longest: return the length of the longest word in an array of words. */

function longest(words, max=0) {
  if (words.length === 0) return max;
  if (words[0].length > max) max = words[0].length;
  return longest(words.slice(1), max);
}
//[hello, hi, hola] ==> 5
//track maxlength, currentlength
// longest([hello,hi,hola]) ==> longest([hi,hola],5)


/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return '';
  return str[0] + everyOther(str.slice(2));
}
//solution: return only odd index values? accumulate as string
//recursion uses index 0 every time, so should slice(2) each loop

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length === 0) return true;
  if (str[0] === str[str.length-1]) return isPalindrome(str.slice(1,str.length-1));
  return false;
}
// isPalindrome('tacocat') ==> true
// test equality of first and last characters


/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if (arr.length === i) return -1;
  if (arr[i] === val) return i;
  return findIndex(arr, val, i+1);
}
// findIndex( ['cat','dog','horse'], 'dog' ) ==> 1

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str === '') return '';
  return Array.from(str).pop() + revString(str.slice(0,-1));
}
// pop last char of string and return with recursive revString function.
// base case empty string


/** gatherStrings: given an object, return an array of all of the string values. */

const gatherStrings = (obj, out=[], i=0) => {
  const vals = Object.values(obj)
  if (vals.length === i) return out;
  if (typeof(vals[i]) === 'string') out.push(vals[i]);
  if (typeof(vals[i]) === 'object') out.push(...gatherStrings(vals[i]));
  return gatherStrings(obj, out, i+1);
}
// iterate over values to determine type. include typeof string in array. recurse func if typeof 'object'

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start=0, end=arr.length-1) {
  // base case
  if (start > end) return -1;

  // find mid
  let mid = Math.floor((start+end)/2);

  // compare mid to target value
  if (arr[mid] === val) return mid;

  // if mid is greater than target value, search lower half
  if (arr[mid] > val) return binarySearch(arr, val, start, mid-1);

  // else search upper half
  if (arr[mid] < val) return binarySearch(arr, val, mid+1, end);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
