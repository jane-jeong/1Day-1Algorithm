// @Title: Programmers > Level 1 > 연습문제 > 소수찾기
// @Source: https://programmers.co.kr/learn/courses/30/lessons/12921
// @Date: 2020-12-08 Tue
// @Status: Unsolved⬜

/* 
문제 설명 
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

제한 조건 
* n은 2이상 1000000이하의 자연수입니다.
*/

// Solution1 (2020-12-08)  
// ✅정확성은 통과했지만 ❌효율성에서 시간 초과 

function solution(n) {
    var answer = 0;
    for(var i=2; i<= n; i++){ // i: orignal number
        let count = 0;
        for(var j=2; j<=n; j++){ // j: divisor 
            if(i%j===0){ count += 1} 
        };
        if(count===1) { answer+=1 }; // 나누어지는 수가 하나 밖에 없을 때 answer += 1
    };
    return answer;
}