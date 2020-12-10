// @Title: Programmers > Level 1 > 연습문제 > 평균 구하기  
// @Source: https://programmers.co.kr/learn/courses/30/lessons/12944
// @Date: 2020-12-10 Thu
// @Status: Solved✅

/* 
문제 설명
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

제한 조건 
* arr은 길이 1 이상, 100 이하인 배열입니다.
* arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
*/

// Solution 1 (for)
function solution(arr) {
    var answer = 0;
    for(var i=0; i<arr.length; i++){
        answer += parseInt(arr[i])
    }
    answer = answer/arr.length;
    return answer;
}


// Solution 2 (reduce)
function solution(arr){
    return arr.reduce((a, b) => a + b) / arr.length;
}