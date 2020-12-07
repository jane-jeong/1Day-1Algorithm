function solution(arr)
{
    var answer = [];
    
    for(var i=0; i<arr.length; i++){
        if(arr[i]!=arr[i+1]){answer.push(i);};
    };
   
    return answer;
}

var test = [1,1,3,3,0,1,1];
test.splice([0,1,2,3],1);

console.log(solution(test));
