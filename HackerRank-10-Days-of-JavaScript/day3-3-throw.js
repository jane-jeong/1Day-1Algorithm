// @Title: 10 Days of JavaScript > Day 3: Throw
// @Source: https://www.hackerrank.com/challenges/js10-throw/problem
// @Date: 2020-12-04 Fir
// @Status: Solved✅

'use strtict'; 

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    
    if (a>0){
        return "YES";
    } else if (a===0) {
        throw new Error("Zero Error");
    } else if (a<0) {
        throw new Error("Negative Error");
    }
}

// Make Shorter 
function isPositive(a) {
    if (a>0) { return "YES" } ;
    throw new Error (a ? "Negative Error" : "Zero Error");
}