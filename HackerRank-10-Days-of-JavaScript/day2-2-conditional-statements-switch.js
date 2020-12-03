// @Title: 10 Days of JavaScript > Day 2: Conditional Statements: Switch
// @Source: https://www.hackerrank.com/challenges/js10-switch/topics/javascript-conditional-switch
// @Date: 2020-12-03 Thur
// @Status: Solved✅

'use strict';

function getLetter(s) {
    let letter;
    // Write your code here
    switch(s[0]){
        case 'a': case 'e': case 'i': case 'o': case 'u':
            letter='A';
            break;
        case 'b': case 'c': case 'd': case'f': case 'g': 
            letter='B';
            break;
        case 'h': case 'j': case'k': case 'l': case 'm':
            letter='C';
            break;
        case 'n': case 'p': case 'q': case 'r': case 's': case 't': case 'v': case 'w': case 'x': case 'y': case 'z':
            letter='D';
            break;
    }
    
    return letter;
}

console.log(getLetter('zwxya'))