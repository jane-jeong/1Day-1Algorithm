// @Title: Programmers > Level 1 > 연습문제 > 문자열 내 마음대로 정렬하기 
// @Source: https://programmers.co.kr/learn/courses/30/lessons/12915
// @Date: 2020-12-08 Tue
// @Status: Solved✅

/* 
문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 
각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 
예를 들어 strings가 [sun, bed, car]이고 n이 1이면 각 단어의 인덱스 1의 문자 u, e, a로 strings를 정렬합니다.

제한 조건 
* strings는 길이 1 이상, 50이하인 배열입니다.
* strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
* strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
* 모든 strings의 원소의 길이는 n보다 큽니다.
* 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
*/

// Solution
function solution(strings, n) {
    
    var list = strings; 
    
    // map으로 위치와 값이 있는 객체가 포함된 임시배열을 만든다
    var mapped = list.map(function(el, i) {
      return { index: i, value: el };
    })

    // 먼저, n번 위치의 값들이 일치하는 경우, 해당 값들의 부분집합 내에서 전체 문자열 기준으로 정렬한다
    // 위에서 한 번 정렬된 전체 집합에서, n번 위치의 값을 기준으로 정렬한다  
    mapped.sort(function(a, b) {
    if(a.value[n]===b.value[n]){ return +(a.value > b.value) - 1; }
    return +(a.value[n] > b.value[n]) - 1;
    });
    
    // 순서가 변경된 인덱스에 원래 값을 매칭
    var result = mapped.map(function(el){
      return list[el.index];
    });
    
    return result;
}


// 다른사람 풀이 
function solution2(strings, n) {
    // strings 배열
    // n 번째 문자열 비교
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}

console.log(solution2(["abcd", "abce", "cdx"],2));