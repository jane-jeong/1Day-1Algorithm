// @Title: String Reverse
// @Source: https://programmers.co.kr/job_positions/1684
// @Date: 2020-12-08 Tue
// @Status: Solved✅

/*
String 이 주어지면 reverse를 출력 하는 함수를 작성해주세요.

Input: “hello”
Output: “olleh”

Input: “Say your prayers, little one”
Output: “eno elttil ,sreyarp ruoy yaS”
*/

function reverse(string){
    return string.split("").reverse().join(""); 
}

function reverseFor(string){
    let arr=[]; 
    for (var i = string.length-1 ; i>=0 ; i--){
        arr.push(string[i]);
    };
    let answer = arr.join("");
    return answer;
}

console.log(reverse("hello"));
console.log(reverse("Say your prayers, little one"));
console.log(reverseFor("hello"));
console.log(reverseFor("Say your prayers, little one"));