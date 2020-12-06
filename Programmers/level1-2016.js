// @Title: Programmers > 연습문제 > 2016년 
// @Source: https://programmers.co.kr/learn/courses/30/lessons/12901
// @Date: 2020-12-06 Sun
// @Status: Solved✅

/* 
문제 설명 
* 2016년은 1월 1일은 금요일이다. 2016년 a월 b일은 무슨 요일일까? 
요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED< THU, FRI, SAT 이다. 
*/

// Solution 1 (time fast ≈0.07ms)
function solution(a, b) {
    var answer = '';
    const day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    const days_eachmonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    for(var i=0; i< a; i++){
        let temp = days_eachmonth.slice(0, i);
        var cum = temp.reduce(function add(sum, currValue) {
            return sum + currValue;
          }, 0);
    }
    answer = day[((b+cum-1)%7)];
    return answer;
}

// Solution 2 (time slow ≈4.00ms)
function solution(a, b) {
    var answer = '';
    const day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    const days_eachmonth = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    var cum =0;
    for(var i=0; i < a; i++){
        cum += days_eachmonth[i];
    }
    console.log(cum);
    answer = day[((b+cum-1)%7)];
    return answer;
}