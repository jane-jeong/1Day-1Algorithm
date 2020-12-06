// @Title: Programmers > Level 1 > Sort > K번째 수 
// @Source: https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
// @Date: 2020-12-06 Sun
// @Status: Solved✅

/* 
문제 설명 
* 배열의 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구한다. 
* 입출력 예 
    array = [1, 5, 2, 6, 3, 7, 4]
    commnads = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
    return = [5, 6, 3]
*/

// Solution 
function solution(array, commands) {
    var answer = [];
    for (var i=0; i<commands.length; i++){
        var temp = array.slice(commands[i][0]-1, (commands[i][1]));
        temp = temp.sort(function(a, b){return a - b});
        answer.push(temp[(commands[i][2]-1)]);
    }
    return answer;
}