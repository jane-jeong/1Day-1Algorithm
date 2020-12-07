// @Title: Programmers > Level 1 > 월간 코드 챌린지 시즌 1 > 두 개 뽑아서 더하기  
// @Source: https://programmers.co.kr/learn/courses/30/lessons/68644
// @Date: 2020-12-07 Mon
// @Status: Solved✅ (소요 시간: 5분) 

/* 
문제 설명 
정수 배열 numbers가 주어진다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 
더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return하도록 solution 함수를 완성해주세요.
*/

// Solution 

function solution(numbers) {
    var answer = [];
    
    for(var i=0; i<numbers.length; i++){
        for(var j=0; j<numbers.length; j++){
            if(i!=j){answer.push(numbers[i] + numbers[j]);}
        };
    };
    
    answer = [...new Set(answer)];
    answer.sort(function(a, b) { return a - b;});
    return answer;
};