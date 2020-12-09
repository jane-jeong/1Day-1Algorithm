// @Title: Programmers > Level 1 > 2020 카카오 인턴십 > 키패드 누르기 
// @Source: https://programmers.co.kr/learn/courses/30/lessons/67256
// @Date: 2020-12-09 Wed
// @Status: Unsolved⬜

//15:25 ~ 16:50 
function solution(numbers, hand) {
    var answer = '';
    const no = numbers ; 
    const loc = [[4,2], [1,1], [1,2], [1,3], [2,1], [2,2], [2,3], [3,1], [3,2], [3,3], [4,1], [4,3]];
    const h = (hand==="right" ? "R" : "L") ;

    for(var i=0; i < numbers.length; i++){

        if(no[i]==1 || no[i]==4 || no[i]==7){ answer += "L" }
        else if(no[i]==3 || no[i]==6 || no[i]==9){ answer += "R" }

        else { // 2, 5, 8, 0 
            if(i===0){
                answer += h; 
            } else if(i===1){
                let k = no[i]; let a = no[i-1]; // a는 바로 이전 숫자 
                let distance_a = (Math.abs(loc[k][0]-loc[a][0])) + (Math.abs(loc[k][1]-loc[a][1]));
                let distance_b  = (Math.abs(loc[k][0]-4)) +1 ;
                if(distance_a < distance_b){ answer += answer[i-1] }
                else if(distance_a > distance_b) { answer += (answer[i-1]==="R" ? "L" : "R")  }
                else { answer += h};
            }

            else{
                let k = no[i]; 
                let thumbR = no[answer.split("").lastIndexOf("R")] // 현재 오른손가락 위치 
                let thumbL = no[answer.split("").lastIndexOf("L")] // 현재 왼손가락 위치  
                let distance_R = (Math.abs(loc[k][0]-loc[thumbR][0])) + (Math.abs(loc[k][1]-loc[thumbR][1]));
                let distance_L = (Math.abs(loc[k][0]-loc[thumbL][0])) + (Math.abs(loc[k][1]-loc[thumbL][1]));
                if(distance_R < distance_L){ answer += "R" }
                else if(distance_R > distance_L) { answer += "L" }
                else { answer += h };
            }

        }
    }   
        
    return answer;
}

console.log(solution( [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"));
// 출력:  LLRLLRLLRL
// 정답 :      LLRLLRLLRL
console.log(solution( [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
// 출력 : LRLLLRLLRRL
// 정답:      LRLLLRLLRRL

/* 
// 
* 채점 결과
정확성: 65.0
합계: 65.0 / 100.0
* 정답은 나오지만 효율성 에러 
* 0개 중 7개 런타임 에러 
*/ 




