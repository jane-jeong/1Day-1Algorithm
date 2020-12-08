// @Title: Programmers > Level 1 > 연습문제 > 문자열 다루기 기본
// @Source: https://programmers.co.kr/learn/courses/30/lessons/12918#
// @Date: 2020-12-08 Tue
// @Status: Solved✅

/* 
문제 설명 
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
예를 들어 s가 a234이면 False를 리턴하고 1234라면 True를 리턴하면 됩니다.

제한 조건 
* s는 길이 1 이상, 길이 8 이하인 문자열입니다.
*/

// Solution 
function solution(s) {
    var isnan = [];
    for(var i=0; i < s.length; i++){
        if(isNaN(Number(s[i]))){
            isnan.push(i);
        }
    };

    if( (s.length===4 || s.length===6) && isnan.length===0 ){
        return true;
    } else { return false; }
}

// 다른 사람 풀이 
// 정규표현식 이용 
function alpha_string46(s){
    var regex = /^\d{6}$|^\d{4}$/;
    return regex.test(s);
  }