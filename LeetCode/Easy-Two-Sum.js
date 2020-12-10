// @Title: LeetCode > Algorithms > Easy > Two Sum
// @Source: https://leetcode.com/problems/two-sum/
// @Date: 2020-12-10 THu
// @Status: Solved✅

/* 
Description:
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Constraints:
* 2 <= nums.length <= 103
* -109 <= nums[i] <= 109
* -109 <= target <= 109
* Only one valid answer exists.
*/

// 1st Solution
var twoSum = function(nums, target) {
    var answer = [];
    for(var i=0; i<nums.length; i++){
        for(var j=0; j<nums.length; j++){
            if(i!=j){ 
                if(nums[i]+nums[j]===target){
                    answer.push(i);
                    answer.push(j);
                    break;
                }
            }
        }
        if(answer.length>1){
            break;
        }
    }
    return answer;
};

// 2nd Solution (Faster)
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length-1; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
};