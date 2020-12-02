// @Title: 10 Days of JavaScript > Day 1: Let and Const
// @Source: https://www.hackerrank.com/challenges/js10-let-and-const/problem
// @Date: 2020-12-02 Wed
// @Status: Solved✅

'use strict';

function main(r) {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()
    const PI = Math.PI;
    const radius = readLine(r);
    
    // Print the area of the circle:
    let area = PI*radius**2; 
    console.log(area);
    
    // Print the perimeter of the circle:
    let perimeter = 2*PI*radius;
    console.log(perimeter);
    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}