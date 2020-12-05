// @Title: 10 Days of JavaScript > Day 4: Create a Rectangle Object
// @Source: https://www.hackerrank.com/challenges/js10-objects/problem
// @Date: 2020-12-05 Sat
// @Status: Solved✅

'use strtict'; 

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    
    let rectangle = { 
        length: a, 
        width: b,
        perimeter : 2*(a+b),
        area: a*b
    };
    
    return rectangle;
}


'use strict';

function Polygon (array) {
    this.type = array;
    this.getInformation = function() {
        let sum = array.reduce( (pre, value, indx, array) => { return pre + value;} );
        return (2*sum);
    }
};

let triangle = new Polygon([3, 4, 5]);
console.log(triangle.getInformation());