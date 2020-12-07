// @Title: Programmers > Level 1 > 연습문제 > 가운데 글자 가져오기  
// @Source: https://programmers.co.kr/learn/courses/30/lessons/12903
// @Date: 2020-12-07 Mon
// @Status: Solved✅

/* 
문제 설명 
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 
단어의 길이가 짝수라면 가운데 두 글자를 반환하면 됩니다. 
s는 길이가 1이상, 100이하인 스트링입니다. 
*/

// Solution 
function solution(s) {
    var answer = '';
    
    if(s.length%2===1){
        answer = s[(s.length+1)/2-1]; 
    } else{
        answer = s.slice(s.length/2-1, s.length/2+1);
    };
    
    return answer;
}