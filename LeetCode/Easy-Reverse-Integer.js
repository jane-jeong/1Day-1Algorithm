// @Title: LeetCode > Algorithms > Easy > Reverse Unteger
// @Source: https://leetcode.com/problems/reverse-integer/
// @Date: 2020-12-10 THu
// @Status: Unsolved⬜

/* 
Description:
Given a 32-bit signed integer, reverse digits of an integer.
Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

Constraints:
* -231 <= x <= 231 - 1
*/

// 1st Solution - Simple (96ms~104ms) 
const reverse1 = x => {
    const limit = 2147483648;
    const k = x < 0 ? -1 : 1;
    const n = Number(String(Math.abs(x)).split('').reverse().join(''));
    return n > limit ? 0 : n * k;
};

// 2nd Solution - Faster (88ms)
const reverse2 = function(x) {
    var sign = x >= 0 ? 1 : -1 ;
    var x = sign == -1 ? -x : x ;
    var rs = []
    while (x > 0) {
        rs.push(Math.floor(x % 10))
        x = Math.floor(x / 10)
    }
    var d = 0;
    for (let i = 0; i < rs.length; i++) {
        d = d * 10 + rs[i]
    }
    d *= sign
    if (d > 2147483647 || d < -2147483648) return 0
    return d
};