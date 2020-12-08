// @Title: Programmers > Level 1 > 연습문제 > 수박수박수박수박수?
// @Source: https://programmers.co.kr/learn/courses/30/lessons/12922
// @Date: 2020-12-08 Tue
// @Status: Solved✅

/* 
문제 설명 
S길이가 n이고, 수박수박수박수....와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 
예를들어 n이 4이면 수박수박을 리턴하고 3이라면 수박수를 리턴하면 됩니다.

제한 조건 
* n은 길이 10,000이하인 자연수입니다.
*/

// Solution 
function solution(n) {
    return "수박".repeat(n/2) + (n%2 === 1 ? "수" : "");
}