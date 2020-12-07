// @Title: 10 Days of JavaScript > Day 4: Classes
// @Source: https://www.hackerrank.com/challenges/js10-class/problem
// @Date: 2020-12-07 Mon
// @Status: Solved✅

/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

'use strict';

let Polygon = class {
    
    constructor(array) {
        this.array = array;
    }
    
    perimeter() {
        let cum = 0;
        for (let i=0; i < this.array.length; i++){
            cum += this.array[i];
        } 
        return cum ; 
    }
}
