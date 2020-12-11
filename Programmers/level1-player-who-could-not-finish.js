// @Title: Programmers > Summber/Winter Coding(~2018) > 예산 
// @Source: https://programmers.co.kr/learn/courses/30/lessons/12982
// @Date: 2020-12-11 Fri
// @Status: Solved✅

/* 
문제 설명 
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

제한 조건 
* 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
* completion의 길이는 participant의 길이보다 1 작습니다.
* 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
* 참가자 중에는 동명이인이 있을 수 있습니다.
*/

// 1st Solution (✅정확성 ❌효율성)
function solution(participant, completion) {
    for(var i=0, len_c = completion.length; i<len_c; i++){
        for(var j=0, len_p = participant.length; j<len_p; j++){
           if(completion[i]===participant[j]) {
               participant.splice(j, 1);
               break;
           }
       }
    }
   return participant[0];
};

// 2nd Solution (✅정확성 ✅효율성)
function solution(participant, completion) {
    var sorted_p = participant.sort();
    var sorted_c = completion.sort(); 
    for(var i=0, len=sorted_p.length; i<len; i++){
        if(!sorted_c[i] | sorted_p[i]!=sorted_c[i]) return sorted_p[i]; 
    };
};

// 다른 사람 풀이 
var solution=(participant,completion)=>participant.find(name=>!completion[name]--,completion.map(name=>completion[name]=(completion[name]|0)+1))