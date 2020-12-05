// @Title: 10 Days of JavaScript > Day 4: Count Object
// @Source: https://www.hackerrank.com/challenges/js10-count-objects/problem
// @Date: 2020-12-05 Sat
// @Status: Solved✅

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    let cnt = 0; 
    for( var i=0; i< objects.length; ++i){
        if (objects[i]['x'] === objects[i]['y']){cnt++;}
    }
    return cnt;
}