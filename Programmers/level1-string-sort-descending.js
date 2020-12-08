// @Title: Programmers > Level 1 > 연습문제 > 문자열 내림차순으로 배치하기  
// @Source: https://programmers.co.kr/learn/courses/30/lessons/12917
// @Date: 2020-12-08 Tue
// @Status: Solved✅

/* 
문제 설명 
문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

제한 조건 
* str은 길이 1 이상인 문자열입니다.
*/

// Solution 

function solution(s) {
    var uppercase = []; 
    var lowercase = [];
    for(let i=0; i < s.length; i++){
        if(s[i]===s[i].toUpperCase()){
            uppercase.push(s[i])
        }else{
            lowercase.push(s[i])
        };
    };
    
    lowercase = lowercase.sort((next, prev) => prev < next ? -1 : 0);
    uppercase = uppercase.sort((next, prev) => prev < next ? -1 : 0);
    var answer = lowercase.join("") + uppercase.join("");
    
    return answer;
}

// 다른 사람 풀이 
// 대문자와 소문자가 섞여있을 때 정렬sort()하면 항상 대문자는 소문자보다 앞에 위치함 
function solution(s) {
    return s
      .split("")
      .sort()
      .reverse()
      .join("");
  }