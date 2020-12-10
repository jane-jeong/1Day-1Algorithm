// @Title: Programmers > Level 1 > 연습문제 > 직사각형 별찍기  
// @Source: https://programmers.co.kr/learn/courses/30/lessons/12969
// @Date: 2020-12-10 Thu
// @Status: Solved✅

/* 
문제 설명
이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

제한 조건 
* n과 m은 각각 1000 이하인 자연수입니다.

예시) "5 3"이 입력으로 주어졌을 때 아래와 같이 출력.
*****
*****
*****
*/


// Solution (test1: 55.07ms)
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    console.log(('*'.repeat(a)+ '\n').repeat(b))  ;
});


// 다른 사람 풀이 (93.76ms)
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = '*'.repeat(a)
    for(let i =0; i < b; i++){
        console.log(row)
    }
});