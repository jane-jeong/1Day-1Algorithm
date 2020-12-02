// @Title: 10 Days of JavaScript > Day 1: Functions
// @Source: https://www.hackerrank.com/challenges/js10-function/problem
// @Date: 2020-12-02 Wed
// @Status: Solved✅

'use strict';

/*
 * Create the function factorial here
 */

function factorial(n){
    
    let output = 1;
    
    do {
        output *= n;
        n --;
    } while(n > 1)
    
    return output;
}