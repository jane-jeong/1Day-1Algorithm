// @Title: Programmers > Level 1 > 연습문제 > 이상한 문자 만들기
// @Source: https://programmers.co.kr/learn/courses/30/lessons/12930
// @Date: 2020-12-09 Wed
// @Status: Unsolved⬜

/* 
문제 설명 
문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 
각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

제한 조건 
* 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
* 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

입출력 예 
* 입력: "try hello world"
* 출력: "TrY HeLlO WoRlD"
*/

// Solution1 (2020-12-09)
// 공백이 2개 이상 있을 경우에 대한 처리가 안되어 있음 
function solution(s) {
    var answer = '';
    var wordList =[];
    var newWord = [];
    
    if(s.match(" ")!=null){
        wordList = s.split(" ");
    } else {
        wordList.push(s);
    }
    
    for(var i=0; i < wordList.length; i++){
        
        var word = wordList[i];
        for(var j=0; j< word.length; j++){
            if(j%2===0){ 
                newWord.push(word[j].toUpperCase());
            } else {
                newWord.push(word[j].toLowerCase());
            }
        };
        newWord.push(" ");
        
    answer = newWord.join("").trim();    
        
    }
    
    return answer;
}  