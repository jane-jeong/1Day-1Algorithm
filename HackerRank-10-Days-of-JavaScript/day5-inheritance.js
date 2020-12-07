// @Title: 10 Days of JavaScript > Day 5: Inheritance
// @Source: https://www.hackerrank.com/challenges/js10-inheritance/problem
// @Date: 2020-12-07 Mon
// @Status: Solved✅


class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function(){return this.w * this.h;}; 

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */

class Square extends Rectangle {
    constructor(length) {
            super(length, length)
        }
}
