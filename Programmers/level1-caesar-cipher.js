// @Title: Programmers > Level 1 > 연습문제 > 시저 암호
// @Source: https://programmers.co.kr/learn/courses/30/lessons/12926
// @Date: 2020-12-08 Tue
// @Status: Unsolved⬜

/* 
문제 설명 
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 
예를 들어 AB는 1만큼 밀면 BC가 되고, 3만큼 밀면 DE가 됩니다. z는 1만큼 밀면 a가 됩니다. 
문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

제한 조건 
* 공백은 아무리 밀어도 공백입니다.
* s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
* s의 길이는 8000이하입니다.
* n은 1 이상, 25이하인 자연수입니다.
*/

// Solution1 (2020-12-08)  ❌
function solution(s, n) {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
    for(var i=0; i < s.length; i++){
        if(s[i]!=" "){
            if(s[i].toLowerCase()===s[i]){
                s = s.replace(s[i], lower[lower.indexOf(s[i])+n]);
            } else { 
                s = s.replace(s[i], upper[upper.indexOf(s[i])+n]); 
            }
        }
    }
    return s ; 
};

// Test Cases
// Input: "AB", 1 / Expected: "BC" / Output: "CB" ❌
// Input: "z", 1 / Expected: "z" / Output: "z" ⭕
// Input: "a B z", 4 / Expected: "e F d" / Output: "e F d"  ⭕