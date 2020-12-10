// @Title: Programmers > Level 1 > 연습문제 > 콜라츠 추측 
// @Source: https://programmers.co.kr/learn/courses/30/lessons/12943
// @Date: 2020-12-10 Thu
// @Status: Solved✅

/* 
문제 설명 
1937년 Collatz란 사람에 의해 제기된 이 추측은, 주어진 수가 1이 될때까지 다음 작업을 반복하면, 
모든 수를 1로 만들 수 있다는 추측입니다. 작업은 다음과 같습니다.

* 1-1. 입력된 수가 짝수라면 2로 나눕니다. 
* 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
* 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.

예를 들어, 입력된 수가 6이라면 6→3→10→5→16→8→4→2→1 이 되어 총 8번 만에 1이 됩니다. 위 작업을 몇 번이나 반복해야하는지 반환하는 함수, solution을 완성해 주세요. 
단, 작업을 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요.

제한 조건 
* 입력된 수, num은 1 이상 8000000 미만인 정수입니다.
*/

// Solution 1
function collatz_1 (num) {
    var answer = 0; 
    
    for(var i=0; i<=500; i++){
        if(num!=1){
            if(num%2===0) num = num/2; 
            else num = num*3+1;
        } else { answer = i; break; }
    };
    
    answer = (num===1 ? answer : -1);
    return answer;
};
console.log( collatz_1(6) );


// 메모: 처음에 떠오른 접근법은 재귀 / while로 푸는 거였는데, 코드가 잘 안 풀려서 위의 for문 풀이법으로 제출했다.
// 아래는 재귀 / while로 푼 다른 사람의 솔루션

// Solution 2 (Recursion)
function collatz_2 (num,count = 0) {
    return num == 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1,++count);
}
console.log( collatz_2(6) );


// Solution 3 (Recursion)
const collatz_3 = (num) => collatzGuessCount(num, 0);
const collatzGuessCount = (num, acc) => 
  (num === 1) ? ((acc > 500) ? -1 : acc) : collatzGuessCount(processCollatz(num), acc + 1);
const processCollatz = (num) => (num % 2 === 0) ? (num / 2) : (num * 3 + 1);
console.log( collatz_3(6) );


// Solution 4 (While)
function collatz_4 (num) {
    var answer = 0;
    while(num !=1 && answer !=500){
        num%2==0 ? num = num/2 : num = num*3 +1;
    answer++;
  }
    return num == 1 ? answer : -1;
}
console.log( collatz_4(6) );