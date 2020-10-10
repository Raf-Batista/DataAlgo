/* 
There are n people lined up, and each have a height represented as an integer. A murder has happened right in front of them, 
and only people who are taller than everyone in front of them are able to see what has happened. How many witnesses are there?

Example:
Input: [3, 6, 3, 4, 1]
[3, 6, 3, 7, 1]
Output: 3
Explanation: Only [6, 4, 1] were able to see in front of them.
*/ 


  function witnesses(heights) {
    let largest = 0;
    let count = 0;
    for(let i = heights.length-1; i >=0; i--) {
        if(largest < heights[i]) {
            largest = heights[i]
            count += 1
        }
    }
    return count;
}
module.exports = witnesses