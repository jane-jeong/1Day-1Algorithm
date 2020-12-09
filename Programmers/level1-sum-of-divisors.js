// @Title: Programmers > Level 1 > 연습문제 > 약수의 합
// @Source: https://programmers.co.kr/learn/courses/30/lessons/12928
// @Date: 2020-12-09 Wed
// @Status: Solved✅

/* 
문제 설명
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

제한 사항
* n은 0 이상 3000이하인 정수입니다.
*/

// Solution
function solution(n) {
    var answer = 0;
    
    for(var i=0; i<=n; i++){
        if(n%i===0){ answer+= i}
    }
    return answer;
}