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

function findIndex(arr, val) {

}
// findIndex( ['cat','dog','horse'], 'dog' ) ==> 1

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

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
