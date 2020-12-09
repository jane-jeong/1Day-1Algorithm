// @Title: Programmers > Level 1 > 연습문제 > 자릿수 더하기 
// @Source: https://programmers.co.kr/learn/courses/30/lessons/12931
// @Date: 2020-12-09 Wed
// @Status: Solved✅

/* 
문제 설명 
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

제한 조건 
* N의 범위 : 100,000,000 이하의 자연수
*/

// Solution 
function solution(n) {
    var answer = 0;
    var arr = String(n).split("");
    arr.forEach(element => answer+= Number(element));
    return answer;
}

// 참고: Number() 대신 parseInt()를 쓸 수 있다. 
// parseInt()는 문자열 인자를 구문분석해서 특정 진수의 정수를 반환한다. (기본값은 십진법)