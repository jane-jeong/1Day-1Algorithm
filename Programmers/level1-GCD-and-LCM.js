// @Title: Programmers > Level 1 > 연습문제 > 최대공약수와 최소공배수 
// @Source: https://programmers.co.kr/learn/courses/30/lessons/12940#
// @Date: 2020-12-09 Wed
// @Status: Solved✅

/* 
문제 설명
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 
배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 
예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

제한 사항
*두 수는 1이상 1000000이하의 자연수입니다.
*/

// Solution
function solution(n, m) {
    var answer = []; // [GCD, LCM] 
    var gcd ;
    
    if(n===m){ 
        answer = [n,n];
    }else if(n<m){
        for(var i=1; i <= n; i++){
          if(n%i===0 && m%i===0){ gcd = i };
      };
        answer.push(gcd);
        answer.push(n*m/gcd); 
    }else{
        for(var i=1; i <= n; i++){
          if(n%i===0 && m%i===0){ gcd = i };
      }; 
        answer.push(gcd);
        answer.push(n*m/gcd); 
    };
    
    return answer;
};


// 다른사람 풀이 
function gcd(a, b) {return b ? gcd(b, a % b) : Math.abs(a);}
function lcm(a, b) {return (a * b) / gcd(a, b);}
function gcdlcm(a, b) {return [gcd(a, b),lcm(a, b)];}

// 테스트
console.log(gcdlcm(2,5));
