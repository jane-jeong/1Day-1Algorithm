// @Title: Programmers > Level 1 > 연습문제 > 정수 제곱근 판별 
// @Source: https://programmers.co.kr/learn/courses/30/lessons/12934
// @Date: 2020-12-09 Wed
// @Status: Solved✅

/* 
문제 설명 
임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 
-1을 리턴하는 함수를 완성하세요.

제한 조건 
* n은 1이상, 50000000000000 이하인 양의 정수입니다.
*/

// Solution (최종 답)
function solution(n) {
    if(n=== Math.floor(Math.sqrt(n))**2){
        return (Math.sqrt(n)+1)**2
    } else { return -1 };        
};


// Solution 
function solution(n) {
    var answer = -1;
    for(var i=1; i <= n; i++){
        if(n/i===i){ 
            answer = (i+1)**2 
        };
    };
    return answer;
}

// Solution 
function solution(n) {
    var answer = 0;
    var temp = [];
    
    for(var i=1; i <= n; i++){
        if(n/i===i ){ 
            temp.push((i+1)**2) 
        };
    };
    
    if(temp.length>=1){ answer = temp[0] }
    else if(temp.length===0) { answer = -1 };
    
    return answer;
}

// Solution 
function solution(n) {
    var answer = 0;
    for(var i=1; i <= n; i++){
        if(n/i===i){answer = (i+1)**2};
    };
    if(answer===0){answer = -1};
    return answer;
}