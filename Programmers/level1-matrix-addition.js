// @Title: Programmers > Level 1 > 연습문제 > 행렬의 덧셈 
// @Source: https://programmers.co.kr/learn/courses/30/lessons/12950
// @Date: 2020-12-10 Thu
// @Status: Solved✅

/* 
문제 설명 
행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

제한 조건 
* 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.
*/

// Solution 1 - for & substr(0.23ms)
function solution(arr1, arr2) {
    var column = arr1.length; 
    var row = arr1[0].length;
    var answer = Array.from(Array(column), () => Array(row).fill(null));
    
    for(var i=0; i < column; i++){    
        for(var j=0; j < row; j++){
            answer[i][j] = arr1[i][j] + arr2[i][j];
        };
    };
    
    return answer;
}

// 다른 사람 풀이 (map, 0.15ms)
function solution(arr1, arr2){   
    return arr1.map((a,i) => a.map((b, j) => b + arr2[i][j]));
}

// 다른 사람 풀이 (0.22ms)
function solution(arr1,arr2){
    var answer = Array();
    for(var i = 0; i < arr1.length; i++){
      answer[i] = [];                        
      for(var j = 0; j < arr1[i].length; j++){
          answer[i][j] = arr1[i][j] + arr2[i][j];             
      };
    };
    return answer;
}