// @Title: Programmers > Level 1 > 연습문제 > 핸드폰 번호 가리기 
// @Source: https://programmers.co.kr/learn/courses/30/lessons/12948
// @Date: 2020-12-10 Thu
// @Status: Solved✅

/* 
문제 설명 
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 
전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

제한 조건 
* s는 길이 4 이상, 20이하인 문자열입니다.
*/

// Solution 1 - for & substr(0.5ms)
function solution(phone_number) {
    var star = ""; 
    for(var i=0; i < phone_number.length-4; i++){
        star += '*';
    }
    return star + phone_number.substr(-4,4);
}; 

/* 위 substr는 옛날 함수. 아래 slice가 음수 지원까지 되므로 slice 추천 */ 

// Solution 2 - repeat & slice (0.4ms)
function solution(phone_number){
    var result = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
    return result;
}

// Solution 3 - 정규식 (0.12ms, Slow)
function solution(phone_number) {
    return phone_number.replace(/\d(?=\d{4})/g, "*");
}