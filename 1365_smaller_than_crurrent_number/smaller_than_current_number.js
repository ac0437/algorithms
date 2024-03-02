// JS: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/submissions/1178409720/
// TS: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/submissions/1178399329/

function smallerThanCurrentNumberOneLiner(nums) {
    return nums.map(current => nums.filter(num => num < current).length);
}
function smallerThanCurrentNumber(nums) {
    let results = [];
    for(let i = 0; i < nums.length; i++) {
        let count = 0;
        for(let j = 0; j <= nums.length + 1; j++) {
            if(j === nums.length) {
                results.push(count);
            }
            else if(nums[j] < nums[i]) {
                count++;
            }
        }
    }

    return results;
}

console.log(smallerThanCurrentNumber([8,1,2,2,3]));