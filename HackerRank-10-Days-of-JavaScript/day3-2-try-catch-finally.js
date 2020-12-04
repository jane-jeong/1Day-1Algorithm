// @Title: 10 Days of JavaScript > Day 3: Try, Catch and Finally
// @Source: https://www.hackerrank.com/challenges/js10-try-catch-and-finally/forum
// @Date: 2020-12-04 Fir
// @Status: Solved✅

'use strtict'; 

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {

    try {
        var reversed = s.split("").reverse().join("");
        console.log(reversed);
    } 
    catch (e) {
        console.log(e.message);
        console.log(s);
    } 
}