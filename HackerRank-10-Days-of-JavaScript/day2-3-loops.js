// @Title: 10 Days of JavaScript > Day 2: Loops
// @Source: https://www.hackerrank.com/challenges/js10-loops/problem
// @Date: 2020-12-03 Thur
// @Status: Solved✅

'use strtict'; 

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
   
    const vowels = ['a','e','i','o','u'];

    for(let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            console.log(s[i]);
        }
    }    

    for(let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i]) === false) {
            console.log(s[i]);
        }
    }

}

vowelsAndConsonants('javascriptloops');


