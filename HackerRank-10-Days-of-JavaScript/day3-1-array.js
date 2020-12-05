// @Title: 10 Days of JavaScript > Day 3: Array
// @Source: https://www.hackerrank.com/challenges/js10-arrays/problem
// @Date: 2020-12-04 Fri
// @Status: Solved✅

'use strtict'; 

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let uniqueNums = [...new Set(nums)];
    let sortNums = uniqueNums.sort((x,y) => (x<y));
    return sortNums[1];
}