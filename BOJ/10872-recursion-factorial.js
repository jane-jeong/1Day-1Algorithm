// @Title: BOJ > 단계별로 풀어보기 > 재귀 > 팩토리얼 
// @Source: https://www.acmicpc.net/problem/10872
// @Date: 2020-12-10 Thu
// @Status: Solved✅

/* 
* 문제: 0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.
* 입력: 첫째 줄에 정수 N(0 ≤ N ≤ 12)가 주어진다.
* 출력: 첫째 줄에 N!을 출력한다.

제한 조건 
* 시간 제한: 1초 
* 메모리제한: 256MB 
*/

// Solution
const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

function factorial(n) { 
    if(n<=1) return 1;
    else return n*factorial(n-1);
};

console.log(factorial(input));