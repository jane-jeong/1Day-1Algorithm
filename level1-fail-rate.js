function solution(N, stages) {
    var answer = [];
    var fail = []; 
    
    for(let i=1; i<=N; i++){
        var sum = stages.filter(function(x) { return x === i });
        fail.push([sum.length, i+1]);    
    }
        
    var sorted_fail = fail.sort(function(a,b) {
        let sum_a = a[0]; 
        let sum_b = b[0]; 
        if(sum_a > sum_b) return -1; 
        if(sum_a < sum_b) return 1;
        return 0;
    });

return sorted_fail.map(function(x) { return x[1]});

};    

console.log(solution(5,[2, 1, 2, 6, 2, 4, 3, 3]));